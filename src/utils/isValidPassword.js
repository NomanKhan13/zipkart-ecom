const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

const eightChar = /^.{8,}$/;
const upperChar = /[A-Z]/;
const lowerChar = /[a-z]/;
const digitChar = /\d/;
const specialChar = /[!@#$%^&*]/;

export const isValidPassword = (password) => {
  if (!eightChar.test(password))
    throw new Error('Password must be at least 8 characters long');
  if (!upperChar.test(password))
    throw new Error('Password must contain at least one uppercase letter');
  if (!lowerChar.test(password))
    throw new Error('Password must contain at least one lowercase letter');
  if (!digitChar.test(password))
    throw new Error('Password must contain at least one digit');
  if (!specialChar.test(password))
    throw new Error('Password must contain at least one special character');

  return true;
};
