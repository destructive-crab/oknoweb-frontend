import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { PrivateSubmitInfo } from '../models/submit.model';
import { Button } from '../button/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-submit-card',
  imports: [Button, ReactiveFormsModule],
  templateUrl: './admin-submit-card.html',
  styleUrl: './admin-submit-card.css',
})
export class AdminSubmitCard {
  @Input() submitInfo!: PrivateSubmitInfo;

  @Output() changed = new EventEmitter<void>();

  private http = inject(HttpClient);

  editToggle: boolean = false;
  maskToggle: boolean = false;

  editReview = new FormControl("");
  editName = new FormControl("");
  editLink = new FormControl("");
  editAdditionalInfo = new FormControl("");
  editContact = new FormControl("");

  isUnverified(): boolean {
    return this.submitInfo.status === "unverified"
  }
  toggleMask() {
    this.maskToggle = !this.maskToggle;
  }
  edit() {
    this.editName.setValue(this.submitInfo.name);
    this.editLink.setValue(this.submitInfo.link);
    this.editAdditionalInfo.setValue(this.submitInfo.additionalInfo);
    this.editContact.setValue(this.submitInfo.contact);
    this.editToggle = true;
  }
  confirmEdit() {
    this.editToggle = false;

    const formData = new FormData();
    formData.append("name", this.editName.value || '')
    formData.append("contact", this.editContact.value || '')
    formData.append("link", this.editLink.value || '')
    formData.append("additionalInfo", this.editAdditionalInfo.value || '')
    formData.append("date", this.submitInfo.date)


    this.http
      .post(`/submit/api/panel/submissions/edit/${this.submitInfo.id}`, formData, {
        headers: this.authHeaders()
      })
      .subscribe((response) => {
        this.changed.emit();
      });
  }
  cancelEdit() {
    this.editToggle = false;
  }

  async approve() {
    await fetch(`/submit/api/panel/submissions/pend/${this.submitInfo.id}`, { method: 'POST', headers: this.authHeaders() });
    this.changed.emit();
  }
  async reject() {
    await fetch(`/submit/api/panel/submissions/reject/${this.submitInfo.id}`, { method: 'POST', headers: this.authHeaders() });
    this.changed.emit();

  }
  private authHeaders(): Record<string, string> {
    const u = localStorage.getItem('admin_username') || 'admin';
    const p = localStorage.getItem('admin_password') || 'admin';
    return { 'Authorization': 'Basic ' + btoa(u + ':' + p) };
  }
  async postReview() {
    const link = this.editReview.value || '';
    await fetch(`/submit/api/panel/submissions/review/set/${this.submitInfo.id}`, {
      method: 'POST',
      headers: { ...this.authHeaders(), 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `reviewLink=${encodeURIComponent(link)}`,
    });
    this.changed.emit();
  }
  async removeReview() {
    await fetch(`/submit/api/panel/submissions/pend/${this.submitInfo.id}`, { method: 'POST', headers: this.authHeaders() });
    this.changed.emit();
  }
}
