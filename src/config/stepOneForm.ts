import { documentTypes, genders } from "../services/ApiFormData";
import { FormField } from "./register";
import * as Yup from "yup";

export interface Option {
  value: number;
  label: string;
}

export interface StepOneData {
  [index: string]: number | Date | string;
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

const SYSTEM_CURRENT_DATE = new Date();

export const stepOneFormValidationSchema = Yup.object().shape({
  documentType: Yup.number().required(),
  documentNumber: Yup.number().required().max(9999999999), // validación especial (dni)
  gender: Yup.number().required(),
  lastname: Yup.string().required().max(40),
  name: Yup.string().required().max(40),
  dateOfBirth: Yup.date()
    .max(SYSTEM_CURRENT_DATE, "La fecha no puede ser mayor a la actual")
    .required(),
  countryOfBirth: Yup.string().required().max(40),
  provinceOfBirth: Yup.string().required().max(53),
  placeOfBirth: Yup.string().required().max(40),
  schoolYear: Yup.number()
    .required()
    .min(1900)
    .max(
      new Date().getFullYear(),
      "El ciclo lectivo no puede ser mayor al año en curso"
    ), // validación especial (year limit)
  grade: Yup.number().required().max(9),
});

const EXCEPTIONS_C3 = [
  "placeOfBirth",
  "gender",
  "countryOfBirth",
  "provinceOfBirth",
];
const EXCEPTIONS_C4 = ["schoolYear", "grade"];

export const disabilityParser = (referenceObject: StepOneData, useCase: number) => {
  console.log('Ejecutando disabilityParser');
  const props = Object.keys(referenceObject);
  const disabilityCases: { [index: string]: string[] } = {
    CASE_ONE: [],
    CASE_TWO: props,
    CASE_THREE: props.filter((prop) => !EXCEPTIONS_C3.includes(prop)),
    CASE_FOUR: props.filter((prop) => !EXCEPTIONS_C4.includes(prop)),
  };

  switch (useCase) {
    case 1:
      return disabilityCases.CASE_ONE;
    case 2:
      return disabilityCases.CASE_TWO;
    case 3:
      return disabilityCases.CASE_THREE;
    case 4:
      return disabilityCases.CASE_FOUR;
  }
};
