import { Component, inject, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Button } from '../button/button';
import { Block } from '../block/block';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-submit-success',
  imports: [Button, Block],
  templateUrl: './submit-success.html',
  styleUrl: './submit-success.css',
})
export class SubmitSuccess {
  public id: string = 'invalid';
  private http = inject(HttpClient);

  constructor(private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document) {
    this.route.params.subscribe((params) => {
      let providedID:string = params['id'];

      this.http.get(`https://oknoweb.ru/submit/api/submissions/${providedID}`, { observe: 'response' })
        .subscribe((response: HttpResponse<any>) => {
          if (response.status != 200) {
            this.id = 'invalid';
          }
          else {
            this.id = providedID;
          }
      });
    });

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
