import { FormField } from "./register";

export const stepOneFields: FormField[] = [
    {
        label: "Tipo de documento",
        type: "dropdown",
    },
    {
        label: "Número de documento",
        type: "text",
    },
    {
        label: "Género",
        type: "dropdown",
    },
    {
        label: "Apellido/s",
        type: "text",
    },
    {
        label: "Nombre/s",
        type: "text",
    },
    {
        label: "Fecha de nacimiento",
        type: "date",
    },
    {
        label: "País de nacimiento",
        type: "text",
    },
    {
        label: "Provincia de nacimiento",
        type: "text",
    },
    {
        label: "Localidad de nacimiento",
        type: "text",
    },
    {
        label: "Ciclo lectivo",
        type: "text",
    },
    {
        label: "Año/Ciclo",
        type: "text",
    },
];
