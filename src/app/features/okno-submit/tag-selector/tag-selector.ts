import { Component, EventEmitter, inject, Input, Output, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitService } from '../../../core/services/submit-service';
import { TagCategoryInfo } from '../../../core/models/submit.model';

@Component({
  selector: 'app-tag-selector',
  imports: [CommonModule],
  templateUrl: './tag-selector.html',
})
export class TagSelector {
  @Input("selectAll") selectAll!: boolean;
  @Input("includePanelOnly") includePanelOnly!: boolean;

  @Input()
  set setSelectedTags(tags: string[]) { this.selectedTags.clear(); this.selectedTags = new Set(tags); }

  @Output() tagsChanged = new EventEmitter<string[]>();

  isLoading = signal(true);

  categories: string[] = [];
  availableTags: Map<string, string[]> = new Map<string, string[]>();
  selectedTags: Set<string> = new Set();

  private submitService = inject(SubmitService);

  ngOnInit() {
    if (this.includePanelOnly)
    {
      this.submitService
        .getCategories()
        .subscribe(categories => this.addCategories(categories));
    }
    else
    {
      this.submitService
        .getCategoriesNotPanelOnly()
        .subscribe(categories => this.addCategories(categories));
    }

    this.tagsChanged.emit(Array.from(this.selectedTags));
  }

  addCategories(categories: TagCategoryInfo[]) {
    this.categories = new Array(categories.length);
    for (const [index, category] of categories.entries()) {
      this.categories[index] = category.category;

      this.submitService
        .getTagsInCategory(category.category)
        .subscribe(tags => {
          this.availableTags.set(category.category, tags)
          if (this.availableTags.size == categories.length) {
            this.isLoading.set(false);

            if (this.selectAll)
            {
              for (const a of this.availableTags)
              {
                for (const b of a[1])
                {
                  this.selectedTags.add(b);
                }
              }

              this.tagsChanged.emit(Array.from(this.selectedTags));
            }
          }
        });
    }
  }

  toggleTag(tag: string): void {
    if (this.selectedTags.has(tag)) {
      this.selectedTags.delete(tag);
    } else {
      this.selectedTags.add(tag);
    }

    this.tagsChanged.emit(Array.from(this.selectedTags));
  }
}
