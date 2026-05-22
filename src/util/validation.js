/**
 * Validates whether the provided value is a valid email address.
 */
export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/**
 * Checks whether the provided value is not empty
 * after trimming leading and trailing spaces.
 */
export function isNotEmpty(value) {
  return value.trim() !== '';
}

/**
 * Validates whether the provided value meets
 * the specified minimum length requirement.
 */
export function hasMinLength(value, minLength) {
  return value.trim().length >= minLength;
}

/**
 * Checks whether two values are equal.
 */
export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}

/**
 * Validates whether the value contains only alphabets.
 */
export function containsOnlyLetters(value) {
  return /^[A-Za-z]+$/.test(value);
}

/**
 * Validates whether the value contains only numbers.
 */
export function containsOnlyNumbers(value) {
  return /^[0-9]+$/.test(value);
}

/**
 * Checks whether the value contains at least one uppercase letter.
 */
export function hasUpperCase(value) {
  return /[A-Z]/.test(value);
}

/**
 * Checks whether the value contains at least one lowercase letter.
 */
export function hasLowerCase(value) {
  return /[a-z]/.test(value);
}

/**
 * Checks whether the value contains at least one special character.
 */
export function hasSpecialCharacter(value) {
  return /[!@#$%^&*(),.?":{}|<>]/.test(value);
}
