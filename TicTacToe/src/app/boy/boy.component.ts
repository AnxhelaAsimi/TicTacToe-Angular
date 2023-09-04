import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boy',
  templateUrl: './boy.component.html',
  styleUrls: ['./boy.component.sass']
})
export class BoyComponent {
  @Input() playerNo: number | null;
  @Input() playersTurn: 'X' | 'O' | null;
  @Input() winner: 'X' | 'O' | null;

  constructor(){
    this.playerNo = null;
    this.playersTurn = null;
    this.winner = null;
  }
}
