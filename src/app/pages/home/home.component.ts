import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TopNavigationComponent } from '../../components/top-navigation/top-navigation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = 'MusicLibrary';
  songs = [
    { poster: '/assets/song-5.png', title: 'Bole Chudiya', movie: 'Tere Saath Mein', audioPath: '/assets/song1.mp3' },
    { poster: '/assets/song-2.png', title: 'Smooth Criminal', movie: 'Private Album', audioPath: '/assets/song2.mp3'  },
    { poster: '/assets/song-3.png', title: 'All XO', movie: 'Star Boy', audioPath: '/assets/song3.mp3' },
    { poster: '/assets/song-4.png', title: 'Title Song', movie: 'The GodFather', audioPath: '/assets/song4.mp3' },
    { poster: '/assets/song-6.png', title: 'Adiga', movie: 'Hi Nanna', audioPath: '/assets/song5.mp3' },
    { poster: '/assets/song-7.png', title: 'City of stars', movie: 'La La Land' },
    { poster: '/assets/song-8.png', title: 'Chandamama', movie: 'Arundhathi' },
    { poster: '/assets/song-9.png', title: 'Vennalavey', movie: 'Thupaki' },
    { poster: '/assets/song-10.png', title: 'Manjanathi', movie: 'Karnan' },
    { poster: '/assets/song-12.png', title: 'Thangamey', movie: 'Nanum Rowdy Dhaan' }
  ];

  constructor(private router: Router) { }
  navigateToHome() {
    this.router.navigate(['/']);
  }
  navigateToLogin(){
    this.router.navigate(['/login'])
  }
  
  currentSong: any;
  isPlaying = false;
  showPlayer: boolean = false;

  onPlayClicked(song: any) {
    this.currentSong = song;
    this.showPlayer = true;
    this.router.navigate(['/'])
  }
 
 @ViewChild(TopNavigationComponent) topNav!: TopNavigationComponent;
 filteredSongs: any[] = this.songs;
 filterSongs(searchValue: string) {
   if (!searchValue) 
   {
     this.filteredSongs = this.songs;
     return;
   }
   this.filteredSongs = this.songs.filter(song => song.title.toLowerCase().includes(searchValue.toLowerCase()) ||song.movie.toLowerCase().includes(searchValue.toLowerCase())   );
 }
}