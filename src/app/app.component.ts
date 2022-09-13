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
    'https://previews.123rf.com/images/majivecka/majivecka1605/majivecka160500071/56574897-ilustraci%C3%B3n-del-vector-del-logotipo-del-gato-sobre-un-fondo-blanco-.jpg';
}
