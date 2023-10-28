import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  newsList: string[] = ['Pelicula 1', 'Pelicula 2', 'Pelicula 3'];
}


