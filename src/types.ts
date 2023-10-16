export type ValidationRules = {
  required?: { value: boolean; message: string};
  maxLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
  min?: { value: number; message: string };
  max?: { value: number; message: string };
};

export interface IFormValues {
    name: string;
    email: string;
    phone: string;
    plan: { name: string, price: number | null},
    additions: {name: string, price: number}[]
}