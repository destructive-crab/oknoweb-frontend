import { Component, Inject } from '@angular/core';
import { Button } from '../button/button';
import { Block } from '../block/block';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Button, Block],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit() {
    this.document.body.classList.add('min-h-screen');
    this.document.body.classList.add('bg-[url(/background.png)]');
    this.document.body.classList.add('bg-repeat');
  }

  ngOnDestroy() {
    this.document.body.classList.remove('min-h-screen');
    this.document.body.classList.remove('bg-[url(/background.png)]');
    this.document.body.classList.remove('bg-repeat');
  }
}
