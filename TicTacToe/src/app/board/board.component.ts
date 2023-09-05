import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent {
  squares: ("X"|"O"|null)[];
  playerTurn: number | null;
  winner: number | null;


  constructor(){
    this.squares = [];
    this.playerTurn = 1;
    this.winner = null;
  }

  ngOnInit(){
    this.newGame();
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.playerTurn = 1;
    this.winner = null;
  }

  get player(){
   return this.playerTurn == 1 ? 'O' : 'X';
  }

  playerMove(id: number){
    if(!this.squares[id]){
      this.squares.splice(id,1,this.player);
      this.playerTurn === 1 ? this.playerTurn = 2 : this.playerTurn = 1;
    }
    //find if we got a winner
    this.winner = this.calcWinner();
  }

  calcWinner(){
    const lines = [
      [0,1,2], [3,4,5], [6,7,8], [0,3,6], 
      [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ];

    for(let i =0; i< lines.length; i++){
      const [a,b,c] = lines[i];
      if(this.squares[a] && this.squares[a]=== this.squares[b]
        && this.squares[a]===this.squares[c]){
          if(this.squares[a] == 'O')
            return 1;
          return 2;
        }
    }
    //no winner yet
    return null;
  }
}
