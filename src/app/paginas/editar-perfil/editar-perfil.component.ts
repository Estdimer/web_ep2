import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsersService} from '../../users.service';
import { ProfileService } from 'src/app/perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})

export class EditarPerfilComponent implements OnInit {
  loginForm: FormGroup;
  userProfileData: any;
  locales: any;

  constructor(
    private fb: FormBuilder,
    private user: UsersService,
    private perf: ProfileService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      nombre: ["", [Validators.required, Validators.maxLength(20)]],
      descipcion: ["", [Validators.required, Validators.maxLength(200)]],
    });
  }

  ngOnInit() {
  }
  
  Confirma() {
    this.userProfileData = localStorage.getItem('local');
    this.userProfileData=JSON.parse(this.userProfileData);
    let userData = {
      usuario:this.loginForm.value.nombre,
      descripcion:this.loginForm.value.descipcion,
      rol:this.userProfileData.rol
    };
    this.userProfileData.usuario=userData.usuario;
    this.userProfileData.descripcion=userData.descripcion;
    console.log(this.userProfileData);
    this.user.updateUser(this.userProfileData.id,userData);
    localStorage.setItem('local', JSON.stringify(this.userProfileData));
    this.router.navigate(["/perfil"]);
  }
}