import { Component, Inject, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../shared/components/button/button';
import { Block } from '../../shared/components/block/block';
import { interval, map, Observable } from 'rxjs'
import { DOCUMENT } from '@angular/common';
import { SubmitService } from '../../core/services/submit-service';
import { SubmitInfo } from '../../core/models/submit.model';

@Component({
  selector: 'app-home',
  imports: [Button, Block, RouterLink],
  templateUrl: './home.html',
  styles: [`
    .marquee-content {
      animation: marquee 30s linear infinite;
    }
    .marquee-paused {
      animation-play-state: paused;
    }
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `],
})
export class Home {
  targetDate = new Date('2026-08-07T23:00:00').getTime();

  private submitService = inject(SubmitService);
  bestSubmissions = signal<SubmitInfo[]>([]);
  marqueePaused = false;

    timeLeft$: Observable<string> = interval(1000).pipe(
      map(() => {
        const diff = this.targetDate - Date.now();
        if (diff <= 0) return 'Expired';

        const days = Math.floor((diff / (1000 * 60 * 60 * 24)));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        return `${days}д ${hours}ч ${minutes}м ${seconds}с`;
      })
    );

  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit() {
    this.document.body.classList.add('min-h-screen');
    this.document.body.classList.add('bg-[url(/background.png)]');
    this.document.body.classList.add('bg-repeat');

    this.submitService.getSubmissions().subscribe(subs => {
      const sorted = [...subs].sort((a, b) => {
        const [d1, m1, y1] = a.date.split('/').map(Number);
        const [d2, m2, y2] = b.date.split('/').map(Number);
        return new Date(y2, m2 - 1, d2).getTime() - new Date(y1, m1 - 1, d1).getTime();
      });

      this.bestSubmissions.set(sorted.slice(0, 10));
    });
  }

  ngOnDestroy() {
    this.document.body.classList.remove('min-h-screen');
    this.document.body.classList.remove('bg-[url(/background.png)]');
    this.document.body.classList.remove('bg-repeat');
  }
}
