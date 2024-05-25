import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-player-interface',
  templateUrl: './player-interface.component.html',
  styleUrls: ['./player-interface.component.css']
})
export class PlayerInterfaceComponent {
  @Input() currentSong: any;
  @Output() closePlayer = new EventEmitter<void>();


  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  play() {
    this.audioPlayer.nativeElement.play();
  }

  pause() {
    this.audioPlayer.nativeElement.pause();
  }
}