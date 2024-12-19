import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../Services/Api.service';
import { Movie } from '../../Models/Movie';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MovieTrailer } from '../../Models/MovieTrailer';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-movie',
  imports: [CommonModule],
  templateUrl: `./DetailMovie.component.html`,
  styleUrl: './DetailMovie.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailMovieComponent { 
  private activatedRoute = inject(ActivatedRoute);
  public movieId = this.activatedRoute.snapshot.params['movie'];

  public movie! : Movie;
  public movieTrailer! : MovieTrailer[];
  public trailerUrl!: SafeResourceUrl;

  constructor(private apiService : ApiService,private sanitizer: DomSanitizer, private cdr : ChangeDetectorRef){

  }

  async getPelisBySearch(search: string): Promise<Movie>{
    const data = await lastValueFrom(this.apiService.GetMoviewBySearchById(search));
    return data;
  }

  async getMovieTrailer(search: string): Promise<MovieTrailer[]>{
    const data = await lastValueFrom(this.apiService.getMovieTrailers(search));
    return data.results;
  }

  async ngOnInit(){
    this.movie = await this.getPelisBySearch(this.movieId);
    this.movieTrailer = await this.getMovieTrailer(this.movieId);

    if (this.movieTrailer.length > 0) {
      this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${this.movieTrailer[0].key}`
      );
    }

    this.cdr.detectChanges();
  }
}
