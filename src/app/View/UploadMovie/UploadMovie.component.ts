import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApiService } from '../../Services/Api.service';
import { Movie } from '../../Models/Movie';

@Component({
  selector: 'app-upload-movie',
  imports: [],
  templateUrl: `./UploadMovie.component.html`,
  styleUrl: './UploadMovie.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadMovieComponent {
  constructor( private Apiservices: ApiService) { }
  addMovie(event: Event): void {
    event.preventDefault(); // Evita que se recargue la página
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    
    const movie: Movie = {
      original_title: formData.get('original_title') as string,
      original_language: formData.get('original_language') as string,
      title: formData.get('title') as string,
      overview: formData.get('overview') as string,
      release_date: formData.get('release_date') as string,
      popularity: parseFloat(formData.get('popularity') as string),
      vote_average: parseFloat(formData.get('vote_average') as string),
      vote_count: parseInt(formData.get('vote_count') as string, 10),
      adult: formData.get('adult') === 'true',
      video: formData.get('video') === 'true',
      poster_path: formData.get('poster_path') as string,
      backdrop_path: formData.get('backdrop_path') as string,
      genre_ids: (formData.get('genre_ids') as string)
        .split(',')
        .map((id) => parseInt(id.trim(), 10)),
      id: 0, // El ID se asigna automáticamente
    };
      
    
    this.Apiservices.addMovie(movie).subscribe({
      next: (response) => {
        console.log('Película agregada con éxito:', response);
        alert('Película agregada exitosamente.');
      },
      error: (err) => {
        console.error('Error al agregar la película:', err);
        alert('Error al agregar la película. Revisa la consola para más detalles.');
      },
    });
}










 }
