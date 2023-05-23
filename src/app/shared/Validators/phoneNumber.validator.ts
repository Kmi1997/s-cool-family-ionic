import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export class RegexPhone{
  public static reg = /^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/;
};

// test phone number
export function regexPhoneValidator(reg: RegexPhone): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    if(control.value?.length < 10) return {message: "Numéro invalide"};
    if(control.value && !control.value.toString().match(reg)){
      return {message: "Erreur de format"};
    }
    return null;
  };
};
