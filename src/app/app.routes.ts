import { Routes } from '@angular/router';
import { MainComponent } from './View/Main/Main.component';
import { SearchComponent } from './View/Search/Search.component';
import { MyListComponent } from './View/MyList/MyList.component';
import { DetailMovieComponent } from './View/DetailMovie/DetailMovie.component';
import { UploadMovieComponent } from './View/UploadMovie/UploadMovie.component';

export const routes: Routes = [
    {path: 'search/:query', component: SearchComponent},
    {path: 'movie/:movie', component: DetailMovieComponent},
    {path: 'uploadmovie', component: UploadMovieComponent},
    {path: 'mylist', component: MyListComponent},
    {path: '**', component: MainComponent}
];
