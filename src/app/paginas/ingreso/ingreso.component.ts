import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsersService} from '../../users.service';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  loginForm: FormGroup;
  usuarios: any[] = [];

  constructor(private fb: FormBuilder, private user: UsersService) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
    console.log('funciono1');
  }

  ngOnInit() {
    this.user.getUser().subscribe((data: any) => {
      this.usuarios = data.usuarios;
      console.log('Datos de usuarios obtenidos:', this.usuarios);
    });
  }

  Confirma() {
      const correo = this.loginForm.value.email;
      const contrasena = this.loginForm.value.password;
     
      const usuario = this.usuarios.find((u) => u.email === correo && u.password === contrasena);
      if (!usuario) {
        console.log('El usuario existe.');
      } else {
        console.log('El usuario no existe.');
      }
    
  }
}



