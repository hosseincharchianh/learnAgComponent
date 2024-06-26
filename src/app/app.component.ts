import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navBarcomponent } from './navBar/navBar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  , navBarcomponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
}
