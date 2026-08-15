import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TagInfo } from '../../../../core/models/submit.model';
import { Button } from '../../../../shared/components/button/button';
import { PanelService } from '../../../../core/services/panel-service';

@Component({
  selector: 'app-panel-tag',
  imports: [Button, CommonModule, ReactiveFormsModule],
  templateUrl: './panel-tag.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelTag {
  @Input("tag") public currentTag!: TagInfo;
  @Output()     public changed = new EventEmitter<void>();

  tagSignal = signal<TagInfo>(this.currentTag);

  public tagEdited = new FormControl('');
  public categoryEdited = new FormControl('');

  public editMode = false;

  private panelService = inject(PanelService);

  ngOnInit()
  {
    this.setFormFieldToTagValues();
    this.tagSignal.set(this.currentTag);
  }

  public edit()
  {
    this.editMode = true;
  }

  public delete()
  {
    this.panelService
      .deleteTag(this.currentTag.tag)
      .subscribe(r => this.changed.emit());
  }

  public saveChanges()
  {
    this.editMode = false;

    if (this.tagEdited.value != null && this.categoryEdited.value != null)
    {
      const tagEdited:TagInfo = { tag: this.tagEdited.value, category: this.categoryEdited.value };

      this.panelService
        .editTag(this.currentTag.tag, tagEdited)
        .subscribe(r => this.changed.emit());
    }
  }

  public discardChanges()
  {
    this.editMode = false;
    this.setFormFieldToTagValues();
  }

  private setFormFieldToTagValues() {
    this.tagEdited.setValue(this.currentTag.tag);
    this.categoryEdited.setValue(this.currentTag.category);
  }
}
