import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boy',
  templateUrl: './boy.component.html',
  styleUrls: ['./boy.component.sass']
})
export class BoyComponent {
  @Input() playerNo: number | null;
  @Input() playersTurn: number | null;
  @Input() winner:  number | null;

  constructor(){
    this.playerNo = null;
    this.playersTurn = null;
    this.winner = null;
  }
}
