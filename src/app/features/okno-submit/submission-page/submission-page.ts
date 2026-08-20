import { Component, inject, Inject } from '@angular/core';
import { ActivatedRoute, ResolveFn } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { type Signal, computed, inject as coreInject } from '@angular/core';
import { SubmitService } from '../../../core/services/submit-service';
import { SubmitInfo } from '../../../core/models/submit.model';
import { Block } from '../../../shared/components/block/block';
import { Button } from '../../../shared/components/button/button';

export const submissionResolver: ResolveFn<SubmitInfo> = (route) => {
  const submitService = coreInject(SubmitService);
  const id = route.paramMap.get('id')!;
  return submitService.getSubmission(id);
};

interface SubmissionRouteData {
  submission: SubmitInfo;
}

@Component({
  selector: 'app-submission-page',
  imports: [Block, Button],
  templateUrl: './submission-page.html',
})
export class SubmissionPage {
  private route = inject(ActivatedRoute);
  private data = toSignal(this.route.data) as Signal<SubmissionRouteData>;

  submission = computed(() => this.data()?.submission);

  openReview() {
    window.open(this.submission()!.reviewLink, '_blank');
  }

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
