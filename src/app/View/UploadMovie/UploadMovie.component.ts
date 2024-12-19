import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-upload-movie',
  imports: [],
  templateUrl: `./UploadMovie.component.html`,
  styleUrl: './UploadMovie.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadMovieComponent { }
