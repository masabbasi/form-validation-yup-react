import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .min(3, "Name Must Be At Least 3 Characters")
    .matches(
      /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      "Enter The Correct Name."
    ),
  familyName: Yup.string()
    .required("Family Name Is Required")
    .min(3, "Family Name Must Be At Least 3 Characters")
    .matches(
      /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      "Enter The Correct Name."
    ),
  userName: Yup.string()
    .required("User Name Is Required")
    .matches(
      /^[A-Za-z][A-Za-z0-9_]{7,29}$/,
      "Enter The Correct UserName. (Starts With A Letter And Is Followed By 7 To 29 Letters, Digits, or Underscores)"
    ),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid Email Address"),
  phone: Yup.string()
    .required("Phone Number Is Required")
    .matches(/^0\d{10}$/, "Enter The Correct Phone."),
  password: Yup.string()
    .required("Password Is Required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
      "Enter The Correct Password. (Least One Letter, One Digit, And 6 Characters)"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password Is Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  checkRule: Yup.boolean().oneOf(
    [true],
    "You Must Accept The Rules To Sign Up"
  ),
});
