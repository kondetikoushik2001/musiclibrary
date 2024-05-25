import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent {
  
  @Input() song!: any;
  @Output() playClicked: EventEmitter<any> = new EventEmitter<any>();

  onPlayClicked() {
    this.playClicked.emit(this.song);
    }
  }


