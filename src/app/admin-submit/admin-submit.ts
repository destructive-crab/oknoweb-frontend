import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Block } from '../block/block';
import { Button } from '../button/button';

export interface AdminSubmitEntry {
  id: number;
  name: string;
  contact: string;
  link: string;
  additionalInfo: string;
  status: string;
  reviewLink?: string;
}

@Component({
  selector: 'app-admin-submit',
  standalone: true,
  imports: [Block, Button, CommonModule, FormsModule],
  templateUrl: './admin-submit.html',
  styleUrl: './admin-submit.css',
})
export class AdminSubmit {
  unverified: AdminSubmitEntry[] = [];
  verified: AdminSubmitEntry[] = [];
  loading = false;
  error: string|null = null;
  reviewEdit: { [id: number]: string } = {};
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.document.body.classList.add('min-h-screen');
    this.document.body.classList.add('bg-[url(/background.png)]');
    this.document.body.classList.add('bg-repeat');
    if (typeof window !== 'undefined') {
      const logged = window.localStorage.getItem('admin-logged');
      if (logged !== 'true') { (window as any).location.href = '/admin/login'; return; }
      this.loadSubmits();
    }
  }
  ngOnDestroy() {
    this.document.body.classList.remove('min-h-screen');
    this.document.body.classList.remove('bg-[url(/background.png)]');
    this.document.body.classList.remove('bg-repeat');
  }

  private authHeaders(): Record<string, string> {
    const u = localStorage.getItem('admin_username') || 'admin';
    const p = localStorage.getItem('admin_password') || 'admin';
    return { 'Authorization': 'Basic ' + btoa(u + ':' + p) };
  }

  loadSubmits() {
    this.loading = true;
    this.cd.detectChanges();
    fetch('/submit/api/panel/submissions', { headers: this.authHeaders() })
      .then(r => { if (!r.ok) throw new Error(r.status + ''); return r.json(); })
      .then((data: AdminSubmitEntry[]) => {
        this.unverified = data.filter(s => s.status === 'unverified');
        this.verified = data.filter(s => s.status !== 'unverified');
        this.loading = false;
        this.cd.detectChanges();
      })
      .catch(e => {
        this.error = 'Ошибка загрузки заявок (' + e.message + ')';
        this.loading = false;
        this.cd.detectChanges();
      });
  }

  async approve(id: number) {
    await fetch(`/submit/api/panel/submissions/pend/${id}`, { method: 'POST', headers: this.authHeaders() });
    this.loadSubmits();
  }
  async reject(id: number) {
    await fetch(`/submit/api/panel/submissions/reject/${id}`, { method: 'POST', headers: this.authHeaders() });
    this.loadSubmits();
  }
  async postReview(id: number) {
    const link = this.reviewEdit[id] || '';
    await fetch(`/submit/api/panel/submissions/review/set/${id}`, {
      method: 'POST',
      headers: { ...this.authHeaders(), 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `reviewLink=${encodeURIComponent(link)}`,
    });
    this.loadSubmits();
  }
  async removeReview(id: number) {
    await fetch(`/submit/api/panel/submissions/pend/${id}`, { method: 'POST', headers: this.authHeaders() });
    this.loadSubmits();
  }

  showPending: boolean = true;
  openPending() { this.showPending = true; }
  openVerified() { this.showPending = false; }

  maskToggle: { [id: number]: boolean } = {};
  toggleMask(id: number) { this.maskToggle[id] = !this.maskToggle[id]; }
}
