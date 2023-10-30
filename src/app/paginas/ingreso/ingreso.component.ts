import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsersService} from '../../users.service';
import { ProfileService } from 'src/app/perfil.service';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private user: UsersService, private prof:ProfileService) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

  }
  
  ngOnInit() {
    console.log('funciono1');
  }

  Confirma() {   
    console.log('aaaaaaaa');
    this.user.getUser().subscribe((data: any) => {
      for (let i = 0; data.length; i++) {
          console.log(i);
          if(data[i].email==this.loginForm.value.email)
          {
            if(data[i].password==this.loginForm.value.password)
            console.log('Datos coinciden');
            this.prof.setPerfil(data[i]);

          }
      } 
    });
  }
}



