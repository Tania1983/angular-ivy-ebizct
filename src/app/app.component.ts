import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Tanya';
  edad: Number = 39;
  miLogo: string =
    'https://kesizo.github.io/assets/images/kesizo-logo-6-832x834.png';
}
