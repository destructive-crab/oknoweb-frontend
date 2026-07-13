import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.html',
  styleUrl: './block.css',
})
export class Block {
  @Input('color') borderColor: string = 'blue-700';
  @Input('bg-color') backgroundColor: string = 'white';
}
