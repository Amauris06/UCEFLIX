import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ScrollCardHorizontalComponent } from '../../Components/ScrollCardHorizontal/ScrollCardHorizontal.component';
import { Movie } from '../../Models/Movie';
import { ApiService } from '../../Services/Api.service';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [ScrollCardHorizontalComponent,CommonModule],
  templateUrl: `./Main.component.html`,
  styleUrl: './Main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent { 
    public moviesSoftwawe! : Movie[];
    public moviesLaws! : Movie[];
    public moviesMedical! : Movie[];
    public moviesArchitec! : Movie[];

    constructor(private apiService : ApiService,private cdr : ChangeDetectorRef){

    }

    async getPelisBySearch(search: string): Promise<Movie[]>{
        const data = await lastValueFrom(this.apiService.GetMoviewBySearch(search));
        const response = data.results;
        return response;
    }
    
    async ngOnInit(){
      this.moviesSoftwawe = await this.getPelisBySearch("software");
      this.moviesLaws = await this.getPelisBySearch("leyes");
      this.moviesMedical = await this.getPelisBySearch("medicina");
      this.moviesArchitec = await this.getPelisBySearch("architec");
      //localStorage.setItem("mylistas", JSON.stringify(this.moviesSoftwawe));
      this.cdr.detectChanges();
    }
}
