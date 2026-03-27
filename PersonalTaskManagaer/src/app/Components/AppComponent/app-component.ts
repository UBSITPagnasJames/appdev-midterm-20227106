import { Component } from '@angular/core';
import { RouterOutlet } from '../../../../node_modules/@angular/router/types/_router_module-chunk';
import { Navi } from '../NavBarComponent/navi';

@Component({
  selector: 'app-app-component',
  standalone: true,
  imports: [RouterOutlet, Navi],
  templateUrl: './app-component.html',
  styleUrl: './app-component.css',
})
export class AppComponent {}
