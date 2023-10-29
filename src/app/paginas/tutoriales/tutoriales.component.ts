import { Component,OnInit } from '@angular/core';
import articulos from '../../../assets/data/tutorial.json'

interface News{
  imagen:string;
  titulo:string;
  descripcion:string;
}
@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.component.html',
  styleUrls: ['./tutoriales.component.css']
})
export class TutorialesComponent implements OnInit{
  
  newsList :News[] =articulos;
  constructor(){}
  ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
}
