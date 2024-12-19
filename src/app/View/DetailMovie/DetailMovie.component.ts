import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../Services/Api.service';
import { Movie } from '../../Models/Movie';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-detail-movie',
  imports: [],
  templateUrl: `./DetailMovie.component.html`,
  styleUrl: './DetailMovie.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailMovieComponent { 
  private activatedRoute = inject(ActivatedRoute);
  public movieId = this.activatedRoute.snapshot.params['movie'];

  public movie! : Movie;

  constructor(private apiService : ApiService){

  }

  async ngOnInit(){
    const data = await lastValueFrom(this.apiService.GetMoviewBySearchById(this.movieId));
    const response = data.results
    this.movie = response;
  }
}
