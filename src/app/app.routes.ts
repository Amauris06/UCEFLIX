import { Routes } from '@angular/router';
import { MainComponent } from './View/Main/Main.component';
import { SearchComponent } from './View/Search/Search.component';
import { MyListComponent } from './View/MyList/MyList.component';

export const routes: Routes = [
    {path: 'search/:query', component: SearchComponent},
    {path: 'mylist', component: MyListComponent},
    {path: '**', component: MainComponent}
];
