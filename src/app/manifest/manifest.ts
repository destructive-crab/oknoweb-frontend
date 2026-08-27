import { Component, DOCUMENT, Inject } from '@angular/core';
import { Block } from '../shared/components/block/block';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manifest',
  imports: [Block, RouterLink],
  templateUrl: './manifest.html',
})
export class Manifest {
  constructor(@Inject(DOCUMENT) private document: Document) {}
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
