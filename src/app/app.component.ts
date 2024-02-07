import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import AOS from 'aos';
// declare let AOS: any;
// AOS.init();

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, FormsModule],
  imports: [
    CommonModule,
    NgOptimizedImage,
    FormsModule,
    RouterOutlet,
    MainComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-first-project';
  // router: any;
  constructor() {
    console.log(AOS); // Loaded Script
  }
  ngOnInit() {
    AOS.init();
  }
}
