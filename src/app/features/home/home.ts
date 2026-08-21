import { Component, Inject, inject, signal } from '@angular/core';
import { Button } from '../../shared/components/button/button';
import { Block } from '../../shared/components/block/block';
import { DOCUMENT } from '@angular/common';
import { SubmitService } from '../../core/services/submit-service';
import { SubmitInfo } from '../../core/models/submit.model';
import { SubmissionsLine } from '../okno-submit/submissions-line/submissions-line';

@Component({
  selector: 'app-home',
  imports: [Button, Block, SubmissionsLine],
  templateUrl: './home.html',
  styles: [],
})
export class Home {
  targetDate = new Date('2026-08-07T23:00:00').getTime();

  private submitService = inject(SubmitService);

  submissionsLine = signal<SubmitInfo[]>([]);

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

      this.submissionsLine.set(sorted.slice(0, 20));
    });
  }

  ngOnDestroy() {
    this.document.body.classList.remove('min-h-screen');
    this.document.body.classList.remove('bg-[url(/background.png)]');
    this.document.body.classList.remove('bg-repeat');
  }
}
