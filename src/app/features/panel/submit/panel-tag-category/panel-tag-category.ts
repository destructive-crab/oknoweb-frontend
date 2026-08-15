import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Button } from '../../../../shared/components/button/button';
import { TagCategoryInfo } from '../../../../core/models/submit.model';
import { PanelService } from '../../../../core/services/panel-service';

@Component({
  selector: 'app-panel-tag-category',
  imports: [Button, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './panel-tag-category.html',
})
export class PanelTagCategory {
  @Input("category") public currentCategory!: TagCategoryInfo;
  @Output() changed = new EventEmitter<void>();

  categorySignal = signal<TagCategoryInfo>(this.currentCategory);

  public categoryEdited = new FormControl('');
  public panelOnly: boolean = false;
  public orderEdited = new FormControl('');

  public editMode = false;

  private panelService = inject(PanelService);

  ngOnInit()
  {
    this.setFormFieldToTagValues();
    this.categorySignal.set(this.currentCategory);
  }

  public edit()
  {
    this.editMode = true;
  }

  public delete()
  {
    this.panelService
      .deleteCategory(this.currentCategory.category)
      .subscribe(r => this.changed.emit());
  }

  public saveChanges()
  {
    this.editMode = false;

    if (this.categoryEdited.value != null && this.orderEdited.value != null)
    {
      const categoryEdited:TagCategoryInfo = { category: this.categoryEdited.value, panelOnly: this.panelOnly, order: parseInt(this.orderEdited.value)};

      this.panelService
        .editCategory(this.currentCategory.category, categoryEdited)
        .subscribe(r => this.changed.emit());
    }
  }

  public discardChanges()
  {
    this.editMode = false;
    this.setFormFieldToTagValues();
  }

  private setFormFieldToTagValues() {
    this.categoryEdited.setValue(this.currentCategory.category);
    this.orderEdited.setValue(this.currentCategory.order.toString());
  }
}
