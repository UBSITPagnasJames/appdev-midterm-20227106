import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navi } from '../NavBarComponent/navi';
import { RouterLink, RouterLinkActive } from '../../../../node_modules/@angular/router/types/_router_module-chunk';

@Component({
  selector: 'app-app-component',
  standalone: true,
  imports: [RouterOutlet, Navi, RouterLinkActive, RouterLink],
  templateUrl: './app-component.html',
  styleUrl: './app-component.css',
})
export class AppComponent {}
