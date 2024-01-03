import * as Yup from "yup";

export interface FormField {
  label: string;
  type?: string;
  placeholder?: string;
}

export const registerFields: FormField[] = [
  {
    label: "Name",
  },
  {
    label: "Email address",
  },
  {
    label: "Password",
    type: "password",
  },
  {
    label: "Confirm password",
    type: "password",
  },
];

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirm: Yup.string()
    .required("Confirmation is needed")
    .oneOf([Yup.ref("password"), ""], "Confirm password does not match"),
});
