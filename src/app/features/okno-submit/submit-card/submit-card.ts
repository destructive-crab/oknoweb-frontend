import { Component, Input } from '@angular/core';
import { SubmitInfo } from '../../../core/models/submit.model';
import { CommonModule } from '@angular/common';
import { Submission } from '../submission/submission';

@Component({
  selector: 'app-submit-card',
  imports: [CommonModule, Submission],
  templateUrl: './submit-card.html',
})
export class SubmitCard {
  @Input() submitInfo!: SubmitInfo;
}
