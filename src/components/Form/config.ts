export interface InsuranceOption {
  value: string;
  id: string;
  name: string;
}

export const checkInsurance: InsuranceOption[] = [
  { value: "Осаго", id: "insurance1", name: "insurance" },
  { value: "Каско", id: "insurance2", name: "insurance" },
  { value: "Имущество", id: "insurance3", name: "insurance" },
  { value: "Медицина", id: "insurance4", name: "insurance" },
  { value: "Несчастный случай", id: "insurance5", name: "insurance" },
];

type FormValues = {
  name: string;
  surname: string;
  insuranceNumber: number;
  phoneNumber: number;
};

export type FormValuesInsurance = {
  name: string;
  placeholder: string;
  type: string;
  required: boolean;
  errorMessage: string;
};

export const formFieldsInsurance: FormValuesInsurance[] = [
  {
    name: "name",
    placeholder: "Имя",
    type: "text",
    required: true,
    errorMessage: "Name is required",
  },
  {
    name: "surname",
    placeholder: "Фамилия",
    type: "text",
    required: true,
    errorMessage: "Surname is required",
  },
  {
    name: "insuranceNumber",
    placeholder: "Номер страхового полиса",
    type: "number",
    required: true,
    errorMessage: "Insurance Number is required",
  },
  {
    name: "phoneNumber",
    placeholder: "Номер Телефона",
    type: "number",
    required: true,
    errorMessage: "Phone Number is required",
  },
];
