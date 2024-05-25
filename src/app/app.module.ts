import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayerInterfaceComponent } from './pages/player-interface/player-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    LoginComponent,
    SignupComponent,
    SongCardComponent,
    HomeComponent,
    PlayerInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
