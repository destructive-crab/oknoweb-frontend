import { Component, Input } from '@angular/core';
import { SubmitInfo } from '../../../core/models/submit.model';
import { SubmissionReviews } from '../submission-reviews/submission-reviews';

@Component({
  selector: 'app-submission',
  imports: [SubmissionReviews],
  templateUrl: './submission.html',
})
export class Submission {
  @Input("submission") submission!: SubmitInfo;
}
