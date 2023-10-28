import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      },
      { validators: Confirmar("email","password") }
    );
    console.log('funciono1');
  }
  Confirma(){
    console.log("funciona3")
  }
}

function Confirmar(mail: string, contra: string) {
  return (formGroup: FormGroup) => {
    const userJson = localStorage.getItem('local');
    if (userJson) {
      const user = JSON.parse(userJson);

      const enteredmail = formGroup.value.email;
      const enteredPassword =formGroup.value.password;

      if (
        user.email === enteredmail &&
        user.password === enteredPassword
      ) {
        console.log('Los datos coinciden.');
      } else {
        console.log('Los datos no coinciden.');
      }
    }
  };
}
