import { Routes } from '@angular/router';
import { Navi } from './Components/navi/navi';
import { Home } from './Components/home/home';

export const routes: Routes = [
    {path: 'Home', component: Home},
    {path: 'Navi', component: Navi}
];
