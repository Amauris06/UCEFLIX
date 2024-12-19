import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  searchform = new FormControl('');

  title = 'uceflix';
  constructor(private router: Router){}

  navigateToSearch(){
    this.router.navigateByUrl('/empty', { skipLocationChange: true }).then(() => {
      this.router.navigate([`search/${this.searchform.value}`]);
    });
  }
}
