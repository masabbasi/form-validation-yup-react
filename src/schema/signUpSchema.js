import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required")
    .matches(/^[^\s]+$/, "Space Is Not Allowed")
    .test("no-space", "Space Is Not Allowed", (value) => {
      return value;
    }),
  familyName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});
