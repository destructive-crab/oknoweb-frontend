import { Component, inject, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Button } from '../../../shared/components/button/button';
import { Block } from '../../../shared/components/block/block';
import { SubmitService } from '../../../core/services/submit-service';

@Component({
  selector: 'app-submit-success',
  imports: [Button, Block, RouterLink],
  templateUrl: './submit-success.html',
})
export class SubmitSuccess {
  public id: string = 'invalid';
  private submitService = inject(SubmitService);
  private router = inject(Router);

  constructor(private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document) {
    this.route.params.subscribe((params) => {
      const providedID: string = params['id'];
      this.id = providedID;
    });
    //waiting for special api for success available
//    this.route.params.subscribe((params) => {
//      const providedID:string = params['id'];
//
//      this.submitService.getSubmission(providedID)
//        .subscribe({
//          next: (response) => {
//            this.id = providedID;
//          },
//          error: (err) => {
//            this.router.navigate(["/home"]);
//            this.id = 'invalid';
//          }
//        });
//    });

  }
  ngOnInit() {
    this.document.body.classList.add('min-h-screen');
    this.document.body.classList.add('bg-[url(/bgmeltedpink.png)]');
    this.document.body.classList.add('bg-repeat');
  }

  ngOnDestroy() {
    this.document.body.classList.remove('min-h-screen');
    this.document.body.classList.remove('bg-[url(/bgmeltedpink.png)]');
    this.document.body.classList.remove('bg-repeat');
  }
}
