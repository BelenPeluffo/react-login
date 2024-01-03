import { RegisterField } from "../pages/Register";

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
