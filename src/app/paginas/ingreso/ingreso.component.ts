import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsersService} from '../../users.service';
import { ProfileService } from 'src/app/perfil.service';
import { Router } from '@angular/router';
//import { info } from 'console';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private user: UsersService, private prof:ProfileService,private router: Router) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

  }
  
  ngOnInit() {
  }

  Confirma() {   
    let infoperfil={
        id:"",
        nombre:"",
        mail:"",
        descripcion:"",
        rol:"",
    };
    this.user.getUser(this.loginForm.value.email).subscribe((data: any) => 
      {
      if(data[0].contraseña==this.loginForm.value.password)
      {

        console.log('Datos coinciden');
        infoperfil.id=data[0].id;
        infoperfil.nombre=data[0].usuario;
        infoperfil.mail=data[0].mail;
        infoperfil.descripcion=data[0].descripcion;
        infoperfil.rol=data[0].rol;
        this.prof.setPerfil(infoperfil);
        localStorage.setItem('local', JSON.stringify(infoperfil));
        this.router.navigate(['/perfil']);
      }
      else
      {
        console.log("Datos no Coinciden");
      }
    });
  }
}



