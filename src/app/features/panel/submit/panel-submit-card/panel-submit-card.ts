import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Button } from '../../../../shared/components/button/button';
import { TagSelector } from '../../../okno-submit/tag-selector/tag-selector';
import { PanelService } from '../../../../core/services/panel-service';
import { PrivateSubmitInfo, SubmissionEditPayload } from '../../../../core/models/submit.model';
import { PanelSubmissionReviews } from '../panel-submission-reviews/panel-submission-reviews';

@Component({
  selector: 'app-panel-submit-card',
  imports: [Button, ReactiveFormsModule, TagSelector, PanelSubmissionReviews],
  templateUrl: './panel-submit-card.html',
})
export class PanelSubmitCard {
  @Input() submission!: PrivateSubmitInfo;
  @Output() changed = new EventEmitter<void>();

  editMode: boolean = false;

  editName = new FormControl("");
  editLink = new FormControl("");
  editAdditionalInfo = new FormControl("");
  editAuthor = new FormControl("");
  editDate = new FormControl("");
  editTags: string[] = [];

  private panelService: PanelService = inject(PanelService);

  ngOnInit() { }

  isUnverified(): boolean {
    return this.submission.status === "unverified"
  }

  onTagsChanged(tags: string[]):void {
    this.editTags = tags;
  }

  approve() {
    this.panelService.pendSubmission(this.submission.id).subscribe(o => this.changed.emit());
  }

  reject() {
    this.panelService.rejectSubmission(this.submission.id).subscribe(o => this.changed.emit());
  }

  edit() {
    this.editName.setValue(this.submission.name);
    this.editLink.setValue(this.submission.link);
    this.editAdditionalInfo.setValue(this.submission.additionalInfo);
    this.editAuthor.setValue(this.submission.author);
    this.editDate.setValue(this.submission.date);

    this.editMode = true;
  }

  saveChanges() {
    this.editMode = false;

    const payload: SubmissionEditPayload = {
      name : this.editName.value || "",
      author: this.editAuthor.value || "",
      link : this.editLink.value || "",
      additionalInfo : this.editAdditionalInfo.value || "",
      date: this.editDate.value || "",
      tags: this.editTags
    };

    this.panelService.editSubmission(this.submission.id, payload).subscribe(o => this.changed.emit());
  }

  discardChanges() {
    this.editMode = false;
  }
}
