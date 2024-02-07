import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule, RouterOutlet],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  serviceImg = 'assets/service.jpg';
}
