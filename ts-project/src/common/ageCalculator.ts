export function ageCalculator(dob: string) {
  const birthDay = new Date(dob);
  const today = new Date();

  let age = today.getFullYear() - birthDay.getFullYear();

  return age;
}
