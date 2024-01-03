import { documentTypes, genders } from "../services/ApiFormData";
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
    options: documentTypes,
    width: "45%",
  },
  {
    width: "45%",
    label: "Número de documento",
    type: "text",
    id: "documentNumber",
  },
  {
    label: "Género",
    type: "dropdown",
    id: "gender",
    options: genders,
    width: "45%",
  },
  {
    width: "45%",
    label: "Apellido/s",
    type: "text",
    id: "lastname",
  },
  {
    width: "45%",
    label: "Nombre/s",
    type: "text",
    id: "name",
  },
  {
    width: "45%",
    label: "Fecha de nacimiento",
    type: "date",
    id: "dateOfBirth",
  },
  {
    width: "45%",
    label: "País de nacimiento",
    type: "text",
    id: "countryOfBirth",
  },
  {
    width: "45%",
    label: "Provincia de nacimiento",
    type: "text",
    id: "provinceOfBirth",
  },
  {
    width: "45%",
    label: "Localidad de nacimiento",
    type: "text",
    id: "placeOfBirth",
  },
  {
    width: "45%",
    label: "Ciclo lectivo",
    type: "text",
    id: "schoolYear",
  },
  {
    label: "Año/Ciclo",
    type: "text",
    id: "grade",
    width: "45%",
  },
];
