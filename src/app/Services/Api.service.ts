import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../Models/Movie';
import { MovieTrailer } from '../Models/MovieTrailer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.themoviedb.org/3/discover/movie';
  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGZkZGIwY2UzMzY4NTAwN2Q3OGM4YzVlNDJmNjlmOCIsIm5iZiI6MTY3NzI4MjM2My43NDg5OTk4LCJzdWIiOiI2M2Y5NGMzYjg0ZjI0OTAwOGRhZmI1NmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.13dZngHdNRIZkse7s2hx0a9nD5uQaVKPwzrgNbP4hWw';

  constructor(private http: HttpClient) { 

  }

  GetMovies(): Observable<{results: Movie[]}>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'accept': 'application/json'
    });

    return this.http.get<{results: Movie[]}>(this.apiUrl, { headers});
  }

  GetMoviewBySearch(query:string): Observable<{results: Movie[]}>{
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'accept': 'application/json'
    });
    return this.http.get<{results: Movie[]}>(url, { headers});
  }

  GetMoviewBySearchById(query:string): Observable<Movie>{
    const url = `https://api.themoviedb.org/3/movie/${query}?language=en-US`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'accept': 'application/json'
    });
    return this.http.get<Movie>(url, { headers});
  }

  getMovieTrailers(movieId: string) :  Observable<{results: MovieTrailer[]}>{
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'accept': 'application/json'
    });
  
    return this.http.get<{results: MovieTrailer[]}>(url, { headers });
  }

}
