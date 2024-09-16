import { AbstractControl, ValidatorFn } from '@angular/forms';

export function gmailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    // Check if the value is valid and ends with @gmail.com
    const isValid = value ? /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value) : true;
    return !isValid ? { 'invalidGmail': { value } } : null;
  };
}
