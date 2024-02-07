import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  bgUrl = 'assets/banner-image.jpg';
  mainImg = 'assets/main-small.jpg';
  bridgeImg = 'assets/bridge-img.jpg';
  trekImg = 'assets/trekking-img.jpg';
  // nepalImg = 'assets/nepal-img.png';
}
