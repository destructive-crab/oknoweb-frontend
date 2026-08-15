import { Component, computed, inject, signal } from "@angular/core";
import { PanelTag } from "../panel-tag/panel-tag";
import { PanelTagCreator } from "../panel-tag-creator/panel-tag-creator";
import { PanelTagCategoryCreator } from "../panel-tag-category-creator/panel-tag-category-creator";
import { Block } from "../../../../shared/components/block/block";
import { Button } from "../../../../shared/components/button/button";
import { PanelTagCategory } from "../panel-tag-category/panel-tag-category";
import { SubmitService } from "../../../../core/services/submit-service";
import { PanelService } from "../../../../core/services/panel-service";
import { TagCategoryInfo, TagInfo } from "../../../../core/models/submit.model";

@Component({
  selector: 'app-panel-submit-tags',
  imports: [PanelTag, Block, Button, PanelTagCategory, PanelTagCreator, PanelTagCategoryCreator],
  templateUrl: './panel-submit-tags.html',
})
export class PanelSubmitTags {
  loadingContent = computed(() => this.contentLoaded == 2);

  private _tags = signal<TagInfo[]>([]);
  readonly tags = this._tags.asReadonly();

  private _categories = signal<TagCategoryInfo[]>([]);
  readonly categories = this._categories.asReadonly();

  private contentLoaded: number = 0;

  private submitService = inject(SubmitService);

  ngOnInit()
  {
    this.loadContent();
  }

  loadTags() {
    this.submitService.getTags()
      .subscribe((data: TagInfo[]) => {
        this.contentLoaded += 1;
        this._tags.set(data);
      }
    );
  }

  loadCategories() {
    this.submitService.getCategories()
      .subscribe((data: TagCategoryInfo[]) => {
        this.contentLoaded += 1;
        this._categories.set(data);
      }
    );
  }

  loadContent()
  {
    this.loadTags();
    this.loadCategories();
  }
}
