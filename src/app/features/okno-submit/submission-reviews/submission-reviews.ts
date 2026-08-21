import { Component, Input } from '@angular/core';
import { SubmitInfo } from '../../../core/models/submit.model';

@Component({
  selector: 'app-submission-reviews',
  imports: [],
  templateUrl: './submission-reviews.html',
})
export class SubmissionReviews {
  @Input("submission") submission!: SubmitInfo;
}
