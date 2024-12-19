import { Injectable } from '@angular/core';
import { Movie } from '../Models/Movie';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getFavorites(): Movie[] {
    const favorites = localStorage.getItem("mylistas");
    return favorites ? JSON.parse(favorites) : [];
  }

  addOrRemoveFavorite(movie: Movie): Movie[] {
    let favorites: Movie[] = this.getFavorites();
  
    const movieIndex = favorites.findIndex((fav) => fav.id === movie.id);
  
    if (movieIndex > -1) {
      favorites.splice(movieIndex, 1);
    } else {
      movie.favorite = true;
      favorites.push(movie);
    }
  
    localStorage.setItem('mylistas', JSON.stringify(favorites));

    return this.getFavorites();
  }
}
