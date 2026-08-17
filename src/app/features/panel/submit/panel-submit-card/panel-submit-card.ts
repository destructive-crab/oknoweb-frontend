import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Button } from '../../../../shared/components/button/button';
import { TagSelector } from '../../../okno-submit/tag-selector/tag-selector';
import { PanelService } from '../../../../core/services/panel-service';
import { PrivateSubmitInfo, SubmissionEditPayload } from '../../../../core/models/submit.model';

@Component({
  selector: 'app-panel-submit-card',
  imports: [Button, ReactiveFormsModule, TagSelector],
  templateUrl: './panel-submit-card.html',
})
export class PanelSubmitCard {
  @Input() submission!: PrivateSubmitInfo;
  @Output() changed = new EventEmitter<void>();

  editMode: boolean = false;
  contactMaskToggle: boolean = false;

  reviewLink = new FormControl("");
  rating = new FormControl<number | null>(null);

  editReview = new FormControl("");
  editName = new FormControl("");
  editLink = new FormControl("");
  editAdditionalInfo = new FormControl("");
  editContact = new FormControl("");
  editDate = new FormControl("");
  editTags: string[] = [];

  private panelService: PanelService = inject(PanelService);

  ngOnInit() {
    this.reviewLink.setValue(this.submission.reviewLink);
    this.rating.setValue(this.submission.rating > -1 ? this.submission.rating : null);
  }

  isUnverified(): boolean {
    return this.submission.status === "unverified"
  }

  getContact(): string {
    if (this.contactMaskToggle) return this.submission.contact;
    else                        return "######";
  }

  toggleContactMask() {
    this.contactMaskToggle = !this.contactMaskToggle;
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
    this.editContact.setValue(this.submission.contact);
    this.editDate.setValue(this.submission.date);

    this.editMode = true;
  }

  saveChanges() {
    this.editMode = false;

    const payload: SubmissionEditPayload = {
      name : this.editName.value || "",
      contact : this.editContact.value || "",
      link : this.editLink.value || "",
      additionalInfo : this.editAdditionalInfo.value || "",
      rating: -1,
      date: this.editDate.value || "",
      tags: this.editTags
    };

    this.panelService.editSubmission(this.submission.id, payload).subscribe(o => this.changed.emit());
  }

  discardChanges() {
    this.editMode = false;
  }

  postReviewLink()
  {
    if (this.reviewLink.value != null) {
      this.panelService.postReviewLink(this.submission.id, this.reviewLink.value).subscribe(r => console.log(r));
    }
  }

  postRating()
  {
    const value = this.rating.value ?? -1;
    this.panelService.setSubmissionRating(this.submission.id, value).subscribe(() => this.changed.emit());
  }
}
