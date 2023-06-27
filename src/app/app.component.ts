import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameNumber: number = 0;
  
  onGameStarted(gameNum: number) {
    console.log(gameNum);
    this.gameNumber = gameNum;
  }
}
