import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
 selector: 'app-top-navigation',
 templateUrl: './top-navigation.component.html',
 styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent {
 @ViewChild('searchBar') searchBar!: ElementRef;
 focusSearchBar() {
  this.searchBar.nativeElement.focus();
}

 searchText: string = '';
 @Output() searchTextChanged = new EventEmitter<string>();
 filterSongs(searchValue: string) {
  this.searchText = searchValue;
  this.searchTextChanged.emit(searchValue);
}

constructor(private router: Router) { }
 navigateToLogin() {
  this.router.navigate(['/login']);
}
navigateToSignUp() {
  this.router.navigate(['/signup']);
}
 
 
 
}