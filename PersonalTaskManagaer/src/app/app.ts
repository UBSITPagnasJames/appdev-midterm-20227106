import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navi } from './Components/navi/navi';
import { Home } from './Components/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navi, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PersonalTaskManagaer');
}
