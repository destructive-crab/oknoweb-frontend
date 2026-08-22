import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Button } from '../../../../shared/components/button/button';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelService } from '../../../../core/services/panel-service';
import { SubmitInfo } from '../../../../core/models/submit.model';

@Component({
  selector: 'app-panel-submission-review-creator',
  imports: [Button, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './panel-submission-review-creator.html',
})
export class PanelSubmissionReviewCreator {
  @Input("submission") submission!: SubmitInfo;
  @Output() created = new EventEmitter<void>();

  public creationMenuOpened = false;

  public author = new FormControl('');
  public link = new FormControl('');
  public rating = new FormControl('');

  private panelService  = inject(PanelService);

  public openMenu()
  {
    this.creationMenuOpened = true;

    this.author.setValue("");
    this.link.setValue("");
    this.rating.setValue("");
  }

  public closeMenu()
  {
    this.creationMenuOpened = false;

    this.author.setValue("");
    this.link.setValue("");
    this.rating.setValue("");
  }

  public post()
  {
    if (this.author.value != null && this.link.value != null && this.rating.value != null)
    {
      this.panelService.postReview(this.submission.id, {author: this.author.value, link:this.link.value, rating: parseInt(this.rating.value) }).subscribe(r => { this.created.emit(); this.creationMenuOpened = false; });
    }
  }
}
