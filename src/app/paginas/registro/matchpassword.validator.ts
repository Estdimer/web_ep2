import { AbstractControl, ControlContainer, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkvaluesmatch(val1: any, val2: any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        let v1 = control.get(val1);
        let v2 = control.get(val2);

        if (v1 && v2 && v1?.value != v2?.value) {
            return {
                valuematcherror: true
            }
        }

        return null;
    }
}


  export   function uppercaseValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value || '';
    return /[A-Z]/.test(value) ? null : { uppercase: true };
  }
  
  export  function lowercaseValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value || '';
    return /[a-z]/.test(value) ? null : { lowercase: true };
  }
  
  export  function numberValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value || '';
    return /\d/.test(value) ? null : { number: true };
  }
  
  export  function specialCharacterValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value || '';
    return /[!@#$%^&*(),.?":{}|<>]/.test(value) ? null : { specialCharacter: true };
  }