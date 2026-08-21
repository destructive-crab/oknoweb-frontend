import { Component, Input } from '@angular/core';
import { SubmitInfo } from '../../../core/models/submit.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submit-card',
  imports: [CommonModule],
  templateUrl: './submit-card.html',
})
export class SubmitCard {
  @Input() submitInfo!: SubmitInfo;
}
