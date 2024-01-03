import { FormField } from "./register";

export interface Option {
  value: number;
  label: string;
}

export interface StepOneData {
  documentType: number;
  documentNumber: number;
  gender: number;
  lastname: string;
  name: string;
  dateOfBirth: Date;
  countryOfBirth: string;
  provinceOfBirth: string;
  placeOfBirth: string;
  schoolYear: number;
  grade: number;
}

export const stepOneFields: FormField[] = [
  {
    label: "Tipo de documento",
    type: "dropdown",
    id: "documentType",
  },
  {
    label: "Número de documento",
    type: "text",
    id: "documentNumber",
  },
  {
    label: "Género",
    type: "dropdown",
    id: "gender",
  },
  {
    label: "Apellido/s",
    type: "text",
    id: "lastname",
  },
  {
    label: "Nombre/s",
    type: "text",
    id: "name",
  },
  {
    label: "Fecha de nacimiento",
    type: "date",
    id: "dateOfBirth",
  },
  {
    label: "País de nacimiento",
    type: "text",
    id: "countryOfBirth",
  },
  {
    label: "Provincia de nacimiento",
    type: "text",
    id: "provinceOfBirth",
  },
  {
    label: "Localidad de nacimiento",
    type: "text",
    id: "placeOfBirth",
  },
  {
    label: "Ciclo lectivo",
    type: "text",
    id: "schoolYear",
  },
  {
    label: "Año/Ciclo",
    type: "text",
    id: "grade",
  },
];
