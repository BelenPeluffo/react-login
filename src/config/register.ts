import * as Yup from "yup";
import { Option } from "./stepOneForm";

export type FieldType = "text" | "password" | "dropdown" | "date";

export interface FormField {
  label: string;
  type: FieldType;
  placeholder?: string;
  id: string;
  options?: Option[];
  width?: string;
}

export interface Registration {
  name: string;
  password: string;
  email: string;
  confirm: string;
}

export const registerFields: FormField[] = [
  {
    label: "Name",
    type: "text",
    id: "name",
  },
  {
    label: "Email address",
    type: "text",
    id: "email",
  },
  {
    label: "Password",
    type: "password",
    id: "password"
  },
  {
    label: "Confirm password",
    type: "password",
    id: "confirm",
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
