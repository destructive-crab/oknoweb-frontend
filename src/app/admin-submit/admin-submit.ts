import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Block } from '../block/block';
import { Button } from '../button/button';
import { PrivateSubmitInfo } from '../models/submit.model';
import { AdminSubmitCard } from '../admin-submit-card/admin-submit-card';

@Component({
  selector: 'app-admin-submit',
  standalone: true,
  imports: [Block, Button, CommonModule, FormsModule, AdminSubmitCard],
  templateUrl: './admin-submit.html',
  styleUrl: './admin-submit.css',
})
export class AdminSubmit {
  unverified: PrivateSubmitInfo[] = [];
  verified: PrivateSubmitInfo[] = [];
  loading = false;
  error: string|null = null;
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
    console.log("loading...");
    this.loading = true;
    this.cd.detectChanges();
    fetch('/submit/api/panel/submissions', { headers: this.authHeaders() })
      .then(r => { if (!r.ok) throw new Error(r.status + ''); return r.json(); })
      .then((data: PrivateSubmitInfo[]) => {
        const yosh_astley = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs';
        for (const s of data) {
          if (s.reviewLink === yosh_astley) s.reviewLink = '';
        }
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


  showPending: boolean = true;
  openPending() { this.showPending = true; }
  openVerified() { this.showPending = false; }
}
