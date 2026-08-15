import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Button } from '../../../../shared/components/button/button';
import { PanelService } from '../../../../core/services/panel-service';

@Component({
  selector: 'app-panel-tag-category-creator',
  imports: [Button, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './panel-tag-category-creator.html',
})
export class PanelTagCategoryCreator {
  @Output() created = new EventEmitter<void>();

  public creationMenuOpened = false;

  public category = new FormControl('');
  public panelOnly: boolean = false;
  public order    = new FormControl('');

  private panelService  = inject(PanelService);

  public openMenu()
  {
    this.creationMenuOpened = true;

    this.category.setValue("");
    this.order.setValue("");
  }

  public closeMenu()
  {
    this.creationMenuOpened = false;

    this.category.setValue("");
    this.order.setValue("");
  }

  public post()
  {
    if (this.category.value != null && this.order.value != null)
    {
      this.panelService.postCategory({ category: this.category.value, panelOnly: this.panelOnly,  order: parseInt(this.order.value) }).subscribe(r => { this.created.emit(); this.creationMenuOpened = false; });
    }
  }
}
