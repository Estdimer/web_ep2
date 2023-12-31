import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/perfil.service';
import { UsersService } from 'src/app/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  userProfileData: any;
  adminForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private user: UsersService,
    private perf: ProfileService,
    private router: Router
  ) {
    this.adminForm = fb.group({
      confirmpassword: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    const userData = localStorage.getItem('local');
    if (userData) {
      this.userProfileData = JSON.parse(userData);
    }
  }

  borrar() {
    this.user.deleteUser(this.userProfileData.id).subscribe(() => {
      localStorage.setItem('local',"");
      console.log('se elimino el perfil');
    });
  }

  Confirma() {
    console.log('a');
  }

}