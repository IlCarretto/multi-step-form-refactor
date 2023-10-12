export type ValidationRules = {
    required?: boolean;
    maxLength?: number;
    pattern?: RegExp;
    min?: number;
    max?: number;
}

export interface IFormValues {
    name: string;
    email: string;
    phone: string;
    // plan: { name: string, price: number | null },
    // additions: {name: string, price: number}[]
}