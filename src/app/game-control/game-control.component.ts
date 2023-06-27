import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy {
  @Output() gameStarted = new EventEmitter<number>();
  gameNumber: number = 0;
  gameInterval: NodeJS.Timeout;

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.gameInterval = setInterval(() => {
      this.gameNumber++;
      this.gameStarted.emit(this.gameNumber);
    }, 1000);
  }

  onStop() {
    clearInterval(this.gameInterval);
  }

  ngOnDestroy() {
    clearInterval(this.gameInterval);
  }
}
