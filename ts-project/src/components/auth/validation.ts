export interface FormErrors {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  dob?: string;
  email?: string;
  phone?: string;
  address?: string;
  password?: string;
  confirmPassword?: string;
}

export function validateForm(formData: FormErrors) {
  let errors: FormErrors = {};

  if (!formData.firstName) {
    errors.firstName = "First Name is required.";
  }

  if (!formData.lastName) {
    errors.lastName = "Last Name is required.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData.email) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Invalid Email Format!";
  }

  const phoneRegex = /^[0-9]{10}$/;
  //1. Allow only number.
  //2. only allow 10 number.

  if (!formData.phone) {
    errors.phone = "Phone number is required.";
  } else if (!phoneRegex.test(formData.phone)) {
    errors.phone = "Invalid phone number!";
  }
  if (!formData.dob) {
    errors.dob = "Date of Birth is required.";
  }
  if (!formData.address) {
    errors.address = "Address is required.";
  }
  if (!formData.password) {
    errors.password = "Password is required.";
  }
  if (!formData.confirmPassword) {
    errors.confirmPassword = "Confirm Password required.";
  }

  return errors;
}
