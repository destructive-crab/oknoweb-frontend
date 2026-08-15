import { Component, Input } from '@angular/core';
import { SubmitInfo } from '../../../core/models/submit.model';
import { Button } from '../../../shared/components/button/button';

@Component({
  selector: 'app-submit-card',
  imports: [Button],
  templateUrl: './submit-card.html',
})
export class SubmitCard {
  @Input() submitInfo!: SubmitInfo;

  openReview() {
    window.open(this.submitInfo.reviewLink, '_blank');
  }
}
