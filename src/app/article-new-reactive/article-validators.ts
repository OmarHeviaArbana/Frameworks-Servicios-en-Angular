import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function NameArticleValidator(): ValidatorFn {
  const invalidListNames = ['Prueba', 'Test', 'Mock', 'Fake'];
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    return invalidListNames.includes(value) ? { invalidName: true } : null;
  };
}
