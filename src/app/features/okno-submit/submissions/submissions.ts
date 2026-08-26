import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, PLATFORM_ID, type Signal, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Block } from '../../../shared/components/block/block';
import { Button } from '../../../shared/components/button/button';
import type { SubmitInfo } from '../../../core/models/submit.model';
import { SubmissionsList } from '../submissions-list/submissions-list';
import { SubmitService } from '../../../core/services/submit-service';

export enum SortingType {
  OldNew,
  NewOld,
}

@Component({
  imports: [FormsModule, SubmissionsList, Button, Block, RouterModule, CommonModule],
  selector: 'app-submissions',
  templateUrl: './submissions.html',
})
export class Submissions {
  private _submissions: SubmitInfo[] | null = null;
  submissions = computed(() => (this._submissions ?? []));

  public pending: boolean = true;

  private submitService = inject(SubmitService);

  openPending() {
    this.pending = true;
  }
  openReviewed() {
    this.pending = false;
  }

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.document.body.classList.add('min-h-screen');
    this.document.body.classList.add('bg-[url(/bgmelted.png)]');
    this.document.body.classList.add('bg-repeat');

    this.submitService.getSubmissions().subscribe((s) => this._submissions = s);
  }

  ngOnDestroy() {
    this.document.body.classList.remove('min-h-screen');
    this.document.body.classList.remove('bg-[url(/bgmelted.png)]');
    this.document.body.classList.remove('bg-repeat');
  }
}
