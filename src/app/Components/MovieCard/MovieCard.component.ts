import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Movie } from '../../Models/Movie';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from '../../Services/LocalStorage.service';

@Component({
  selector: 'app-movie-card',
  imports: [CommonModule],
  templateUrl: './MovieCard.component.html',
  styleUrl: './MovieCard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent { 
  @Input()
  public movie! : Movie;
  public movies! : Movie[];

  constructor(public localStorageService : LocalStorageService, private cdr : ChangeDetectorRef){

  }

  togglefavorite(movieToggle : Movie){
    this.movie.favorite = !this.movie.favorite;
    this.localStorageService.addOrRemoveFavorite(movieToggle);
    this.cdr.detectChanges();
  }

  ngOnInit(){
    this.movies = this.localStorageService.getFavorites();
  }
}
