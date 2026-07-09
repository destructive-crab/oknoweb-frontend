import { Component, inject, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Block } from '../block/block';
import { Button } from '../button/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [Block, Button, FormsModule, CommonModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;
  private router = inject(Router);
  private http = inject(HttpClient);
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.document.body.classList.add('min-h-screen');
    this.document.body.classList.add('bg-[url(/background.png)]');
    this.document.body.classList.add('bg-repeat');
  }
  ngOnDestroy() {
    this.document.body.classList.remove('min-h-screen');
    this.document.body.classList.remove('bg-[url(/background.png)]');
    this.document.body.classList.remove('bg-repeat');
  }

  login() {
    const auth = btoa(this.username + ':' + this.password);
    const headers = new HttpHeaders({ 'Authorization': 'Basic ' + auth });

    this.http.get('/submit/api/panel/login', { headers }).subscribe({
      next: () => {
        localStorage.setItem('admin-logged', 'true');
        localStorage.setItem('admin_username', this.username);
        localStorage.setItem('admin_password', this.password);
        this.router.navigate(['/admin/submit']);
      },
      error: () => {
        this.loginFailed = true;
      }
    });
  }
}
