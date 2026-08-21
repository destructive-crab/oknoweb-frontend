import { ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { SubmissionReview, SubmitInfo } from '../../../core/models/submit.model';
import { SubmitService } from '../../../core/services/submit-service';
import { Button } from '../../../shared/components/button/button';

@Component({
  selector: 'app-submission-reviews',
  imports: [Button],
  templateUrl: './submission-reviews.html',
})
export class SubmissionReviews {
  @Input("submission") submission!: SubmitInfo | null;

  public reviews : SubmissionReview[] = [];
  private submitService: SubmitService = inject(SubmitService);

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit()
  {
    if (this.submission != null)
    {
      this.submitService.getReviews(this.submission.id).subscribe(reviews => {
        this.reviews = reviews;
        this.cdr.markForCheck();
      });
    }
  }

}
