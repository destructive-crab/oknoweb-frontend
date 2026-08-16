import { Component, Input } from '@angular/core';
import { SubmitInfo } from '../../../core/models/submit.model';

@Component({
  selector: 'app-submission-page',
  imports: [],
  templateUrl: './submission-page.html',
})
export class SubmissionPage {
  public submission!: SubmitInfo;

}
