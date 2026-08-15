import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Button } from '../../../../shared/components/button/button';
import { PanelService } from '../../../../core/services/panel-service';

@Component({
  selector: 'app-panel-tag-creator',
  imports: [ReactiveFormsModule, Button],
  templateUrl: './panel-tag-creator.html',
})
export class PanelTagCreator {
    @Output() created = new EventEmitter<void>();

    public newTagMenuOpened = false;

    public newTag         = new FormControl('');
    public newTagCategory = new FormControl('');

    private panelService  = inject(PanelService);

    public openNewTagMenu()
    {
      this.newTagMenuOpened = true;
      this.newTag.setValue("");
      this.newTagCategory.setValue("");
    }

    public closeNewTagMenu()
    {
      this.newTagMenuOpened = false;
      this.newTag.setValue("");
      this.newTagCategory.setValue("");
    }

    public postNewTag()
    {
      if (this.newTag.value != null && this.newTagCategory.value != null)
      {
        this.panelService.postTag({ tag: this.newTag.value, category: this.newTagCategory.value }).subscribe(r => { this.created.emit(); this.newTagMenuOpened = false; });
      }
    }
}
