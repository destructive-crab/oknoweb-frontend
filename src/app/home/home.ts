import { Component, Inject } from '@angular/core';
import { Button } from '../button/button';
import { Block } from '../block/block';
import { interval, map, Observable } from 'rxjs'
import { AsyncPipe, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Button, Block, AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  targetDate = new Date('2026-08-07T23:00:00').getTime();

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
  }

  ngOnDestroy() {
    this.document.body.classList.remove('min-h-screen');
    this.document.body.classList.remove('bg-[url(/background.png)]');
    this.document.body.classList.remove('bg-repeat');
  }
}
