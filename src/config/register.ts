import { RegisterField } from "../pages/Register";
import * as Yup from "yup";

export const registerFields: RegisterField[] = [
  {
    label: "Name",
    validation: {
      required: {
        value: true,
        message: `required: name`,
      },
      disabled: true,
    },
  },
  {
    label: "Email address",
    validation: {
      required: {
        value: true,
        message: `required: email address`,
      },
    },
  },
  {
    label: "Password",
    type: "password",
    validation: {
      required: {
        value: true,
        message: `required: password`,
      },
    },
  },
  {
    label: "Confirm password",
    type: "password",
    validation: {
      required: {
        value: true,
        message: `required: password confirmation`,
      },
    },
  },
];

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
  "confirm password": Yup.string()
    .required("Confirmation is needed")
    .oneOf([Yup.ref("password"), ""], "Confirm password does not match"),
});
