import { ChangeDetectorRef, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SubmissionReview, SubmitInfo } from '../../../../core/models/submit.model';
import { SubmitService } from '../../../../core/services/submit-service';
import { PanelService } from '../../../../core/services/panel-service';
import { Button } from '../../../../shared/components/button/button';
import { PanelSubmissionReviewCreator } from '../panel-submission-review-creator/panel-submission-review-creator';

@Component({
  selector: 'app-panel-submission-reviews',
  imports: [Button, PanelSubmissionReviewCreator],
  templateUrl: './panel-submission-reviews.html',
})
export class PanelSubmissionReviews {
  @Input("submission") submission!: SubmitInfo | null;

  public reviews : SubmissionReview[] = [];

  private submitService: SubmitService = inject(SubmitService);
  private panelService: PanelService = inject(PanelService);

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit()
  {
    this.loadReviews();
  }

  public deleteReview(id:number) {
    if (this.submission != null) {
      this.panelService.deleteReview(this.submission.id, id).subscribe(r => this.loadReviews());
    }
  }

  public loadReviews() {
    if (this.submission != null) {
      this.submitService.getReviews(this.submission.id).subscribe(reviews => {
        this.reviews = reviews;
        this.cdr.markForCheck();
      });
    }
  }
}
