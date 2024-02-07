// Import all your routes here
// import { FirstComponent } from './first/first.component';
// import { SecondComponent } from './second/second.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', component:MainComponent},
    {path: 'about', component:AboutComponent},
    {path: 'services', component:ServicesComponent},
    {path: 'contact', component:ContactComponent},
    // {path: 'first', component: FirstComponent},
    // {path: 'second', component: SecondComponent}
];
