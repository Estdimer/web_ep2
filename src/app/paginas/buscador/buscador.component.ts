import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit { 
  buscarForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buscarForm = fb.group({
      buscar: ['']
    });
    console.log('funciono1');
  }
  ngOnInit() {
    console.log('funciono2');
  }

  SaveData() {
     //console.log(this.buscarForm.get('buscar').value);
    console.log('funciono3');
}
}