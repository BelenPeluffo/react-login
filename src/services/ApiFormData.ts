import { Option } from "../config/stepOneForm";

export const documentTypes: Option[] = [
  {
    value: 1,
    label: "DNI",
  },
  {
    value: 2,
    label: "Passaport",
  },
];

export const genders: Option[] = [
    {
        value: 1,
        label: "Female",
      },
      {
        value: 2,
        label: "Male",
      },
      {
        value: 3,
        label: "Non binary",
      },
]

export const useCases: Option[] = [
  {
    label: "!is_from_api && isAllAnaliticsStatusLesSix",
    value: 1,
  },
  {
    label: "!is_from_api && isCancelledAndNotEditable",
    value: 2,
  },
  {
    label: "is_from_api && editStep1",
    value: 3,
  },
  {
    label: "!isForAdditionalCareer && !is_from_api",
    value: 4,
  },
]
