import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, PLATFORM_ID, type Signal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import type { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Block } from '../../../shared/components/block/block';
import { Button } from '../../../shared/components/button/button';
import type { SubmitInfo } from '../../../core/models/submit.model';
import { SubmissionsList } from '../submissions-list/submissions-list';
import { SubmitService } from '../../../core/services/submit-service';

export enum SortingType {
  OldNew,
  NewOld,
}

export const submissionsListResolver: ResolveFn<SubmitInfo[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const submitService = inject(SubmitService);
  return submitService.getSubmissions();
};

// <- crutch whose purpose is suppress compilation error by converting ActivatedRoute data into a predictable format
interface RouteData {
  submissions: SubmitInfo[];
}

@Component({
  imports: [FormsModule, SubmissionsList, Button, Block, RouterModule, CommonModule],
  selector: 'app-submissions',
  templateUrl: './submissions.html',
})
export class Submissions {
  // private http = inject(HttpClient);

  private route: ActivatedRoute = inject(ActivatedRoute);
  private data = toSignal(this.route.data) as Signal<RouteData>;
  submissions = computed(() => (this.data()?.submissions as SubmitInfo[]) ?? {});
  // submissions = signal({} as SubmitInfo[]);

  public pending: boolean = true;
  // public submissionsCountPrerequest = signal(0);

  openPending() {
    this.pending = true;
  }
  openReviewed() {
    this.pending = false;
  }

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.document.body.classList.add('min-h-screen');
    this.document.body.classList.add('bg-[url(/bgmelted.png)]');
    this.document.body.classList.add('bg-repeat');

    // this.http.get<SubmitInfo[]>('/submit/api/submissions').subscribe((data: SubmitInfo[]) => {
    //   this.submissions = data;
    //   this.submissionsCountPrerequest.set(data.length);
    // });
  }

  ngOnDestroy() {
    this.document.body.classList.remove('min-h-screen');
    this.document.body.classList.remove('bg-[url(/bgmelted.png)]');
    this.document.body.classList.remove('bg-repeat');
  }
}
