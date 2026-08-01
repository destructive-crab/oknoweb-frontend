import { CommonModule, DOCUMENT, isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject, PLATFORM_ID, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Block } from '../block/block';
import { Button } from '../button/button';
import type { SubmitInfo } from '../models/submit.model';
import { SubmissionsList } from '../submissions-list/submissions-list';

export enum SortingType {
  OldNew,
  NewOld,
}

@Component({
  imports: [FormsModule, SubmissionsList, Button, Block, RouterModule, CommonModule],
  selector: 'app-submissions',
  templateUrl: './submissions.html',
})
export class Submissions {
  private http = inject(HttpClient);

  public submissions: SubmitInfo[] | undefined;

  public pending: boolean = true;
  public submissionsCountPrerequest = signal(67);

  openPending() {
    this.pending = true;
  }
  openReviewed() {
    this.pending = false;
  }

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) {};

  ngOnInit() {
    this.document.body.classList.add('min-h-screen');
    this.document.body.classList.add('bg-[url(/bgmelted.png)]');
    this.document.body.classList.add('bg-repeat');

    // todo: submissionsCountPrerequest getting by api
    // todo: replace http.get by ServerRouter

    this.http
      .get<SubmitInfo[]>('/submit/api/submissions')
      .subscribe((data: SubmitInfo[]) => {
        this.submissions = data;
        this.submissionsCountPrerequest.set(data.length);
      });
  }

  ngOnDestroy() {
    this.document.body.classList.remove('min-h-screen');
    this.document.body.classList.remove('bg-[url(/bgmelted.png)]');
    this.document.body.classList.remove('bg-repeat');
  }
}
