import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Movie } from '../../Models/Movie';
import { MovieCardComponent } from '../../Components/MovieCard/MovieCard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-list',
  imports: [MovieCardComponent, CommonModule],
  templateUrl: `./MyList.component.html`,
  styleUrl: './MyList.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyListComponent {
  public movies! : Movie[];

  getFavorites(): Movie[] {
    const favorites = localStorage.getItem("mylistas");
    return favorites ? JSON.parse(favorites) : [];
  }

  ngOnInit(){
    this.movies = this.getFavorites();
    this.movies = this.movies.filter(movie => movie.poster_path != null && movie.poster_path !== '');
  }
}
