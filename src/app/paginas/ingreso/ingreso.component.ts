import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsersService} from '../../users.service';
import { ProfileService } from 'src/app/perfil.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
 protected  loginForm: FormGroup;
  siteKey: string;

  constructor(private fb: FormBuilder, private user: UsersService, private prof:ProfileService,private router: Router) {
    this.siteKey = "6LfC8B8pAAAAAMPbjtt7uO-WNdizyppMq-zbgGtV";
    
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      recaptcha: ['', Validators.required]
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
    let datosInicio={
      mail:this.loginForm.value.email,
      contraseña:this.loginForm.value.password,
    };
    this.user.getUser(datosInicio).subscribe((data: any) => 
      {
        if(data)
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



