import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  game: Game = new Game; // Does not allow it without initialization

  constructor(){};


  ngOnInit(){
    this.newGame();
  }

  newGame(){
    this.game = new Game();
  }



  takeCard(){
    this.pickCardAnimation= true;
  }

}
