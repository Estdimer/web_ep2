import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/perfil.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  userProfileData: any; // Propiedad para almacenar los datos del perfil

  constructor(private perf: ProfileService) {}

  ngOnInit() {
    console.log(this.perf); // Obtener datos del perfil desde el servicio
  }
}
