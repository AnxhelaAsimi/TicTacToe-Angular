import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.sass']
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null;
  randomNumber: number;

  constructor(){
    this.value = null;
    this.randomNumber = 0;
  }
}
