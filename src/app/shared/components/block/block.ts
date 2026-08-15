import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.html',
})
export class Block {
  @Input('margin') margin: string = 'md:mx-[8vw]';
  @Input('color') borderColor: string = 'blue-700';
  @Input('bg-color') backgroundColor: string = 'white';
}
