import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

function dateDiff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

export function checkDay(control: AbstractControl) {
  const day = new Date(control.value);
  const now = new Date();

  if (dateDiff(day, now) <= 0) {
    return {checkDay: true};
  }
  return null;
}

