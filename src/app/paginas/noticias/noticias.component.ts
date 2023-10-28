import { Component, OnInit } from '@angular/core';
import * as articulos from '../../../assets/data/arti.json';

interface News {
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  newslist: News[] = articulos;

  constructor() { }

  ngOnInit() {
    // Código de inicialización, si es necesario
  }
}

