import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class EndDateMinValidator {
  static endDateMinimum(formControl : string): ValidatorFn {
    return (control : AbstractControl): ValidationErrors | null => {

      if(!control.parent) {
        return null;
      }
      else{
        const formControlValue = control.parent.get(formControl).value;
        const milliNumberEndDate = Date.parse(control.value);
        const end = new Date(milliNumberEndDate).toLocaleDateString();
        const milliNumberStartDate = Date.parse(formControlValue);
        const start = new Date(milliNumberStartDate).toLocaleDateString();

        if(start > end) return {"LessThanStartDate" : true};

      }


      return null;
    };
  };
}
