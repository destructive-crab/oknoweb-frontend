import { Component, Input } from '@angular/core';
import { SubmitInfo } from '../../../core/models/submit.model';
import { Button } from '../../../shared/components/button/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submit-card',
  imports: [Button, CommonModule],
  templateUrl: './submit-card.html',
})
export class SubmitCard {
  @Input() submitInfo!: SubmitInfo;

  openReview() {
    window.open(this.submitInfo.reviewLink, '_blank');
  }

  getRating(): ('full' | 'half' | 'empty')[] {
    const rating = this.submitInfo.rating;
    return Array.from({ length: 5 }, (_, i) => {
      const starMax = (i + 1) * 2;
      if (rating >= starMax) return 'full';
      if (rating >= starMax - 1) return 'half';
      return 'empty';
    });
  }
}
