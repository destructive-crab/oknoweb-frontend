import { Component, computed, Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from '../button/button';
import type { SubmitInfo } from '../models/submit.model';
import { SubmitCard } from '../submit-card/submit-card';

export enum SortingType {
  OldNew,
  NewOld,
}

export enum ShowcaseSize {
  Less,
  More,
  All,
}

@Component({
  imports: [Button, SubmitCard, FormsModule],
  selector: 'app-submissions-list',
  templateUrl: './submissions-list.html',
})
export class SubmissionsList {
  @Input('submissions') submissions: SubmitInfo[] = [];
  @Input('label') label: string = 'submissions';

  public filteredSubmissions: SubmitInfo[] = this.submissions;

  private currentSorting: SortingType = SortingType.NewOld;
  public sortText: string = 'notinit';

  private currentShowcaseSizeSwitcher: ShowcaseSize = ShowcaseSize.Less;
  public currentShowcaseSize: number = 0;
  public currentTab: number = 1;
  public tabsCount: number = 1;
  public showcaseSizeText: string = 'notinit';

  filter(filter: string) {
    if (filter === '') {
      this.filteredSubmissions = this.submissions;
      return;
    }
    this.filteredSubmissions = this.submissions.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );

    this.applyShowcaseSize(this.currentShowcaseSizeSwitcher);
  }

  switchSortingType() {
    let switchedSorting: number = this.currentSorting;
    switchedSorting++;

    if (!(switchedSorting in SortingType)) {
      switchedSorting = 0;
    }

    this.applySort(switchedSorting);
  }

  applySort(type: SortingType) {
    this.currentSorting = type;

    this.filteredSubmissions.sort((a, b) => {
      const [d1, m1, y1] = a.date.split('/').map(Number);
      const [d2, m2, y2] = b.date.split('/').map(Number);

      if (this.currentSorting === SortingType.OldNew) {
        return new Date(y1, m1 - 1, d1).getTime() - new Date(y2, m2 - 1, d2).getTime();
      } else {
        return new Date(y2, m2 - 1, d2).getTime() - new Date(y1, m1 - 1, d1).getTime();
      }
    });

    if (this.currentSorting === SortingType.OldNew) {
      this.sortText = 'nf-md-sort_ascending';
    } else {
      this.sortText = 'nf-md-sort_descending';
    }
  }

  switchShowcaseSize() {
    let showcaseSize: number = this.currentShowcaseSizeSwitcher;
    showcaseSize++;

    if (!(showcaseSize in ShowcaseSize)) {
      showcaseSize = 0;
    }

    this.applyShowcaseSize(showcaseSize);
  }

  getShowcaseSize(size: ShowcaseSize): number {
    switch (size) {
      case ShowcaseSize.Less: {
        return 5;
      }

      case ShowcaseSize.More: {
        return 10;
      }

      case ShowcaseSize.All: {
        return this.submissions.length;
      }
    }
  }

  applyShowcaseSize(size: ShowcaseSize) {
    this.currentShowcaseSizeSwitcher = size;
    this.currentTab = 1;

    switch (this.currentShowcaseSizeSwitcher) {
      case ShowcaseSize.Less: {
        this.showcaseSizeText = '5 игр';
        this.tabsCount = Math.ceil(this.filteredSubmissions.length / 5);
        break;
      }

      case ShowcaseSize.More: {
        this.showcaseSizeText = '10 игр';
        this.tabsCount = Math.ceil(this.filteredSubmissions.length / 10);
        break;
      }

      case ShowcaseSize.All: {
        this.showcaseSizeText = 'все';
        this.tabsCount = 1;
        break;
      }
    }

    if (this.tabsCount === 0) {
      this.tabsCount = 1;
    }

    this.currentShowcaseSize = this.getShowcaseSize(size);
  }

  moveNextTab() {
    this.currentTab++;

    if (this.currentTab > this.tabsCount) {
      this.currentTab = 1;
    }
  }

  moveBackTab() {
    this.currentTab--;

    if (this.currentTab <= 0) {
      this.currentTab = this.tabsCount;
    }
  }

  ngOnInit() {
    this.filteredSubmissions = this.submissions;

    this.currentSorting = SortingType.NewOld;
    this.sortText = 'nf-md-sort_descending';
    this.applySort(SortingType.NewOld);

    this.applyShowcaseSize(ShowcaseSize.Less);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.filter('');
    console.log('change')
  }
}
