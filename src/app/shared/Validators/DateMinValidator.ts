import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class DateMinValidator {
  static dateMinimum(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value == null) {
        return null;
      }
       let today : Date = new Date();

      if(new Date(control.value) < today) return {"LessThanToday" : true};

      return null;
      };
    };
}
