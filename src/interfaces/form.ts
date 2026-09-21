export type InputType = 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select' | 'checkbox' | 'multi-checkbox' | 'radio' | 'date' | 'color';
export type FormFieldValue = string | number | boolean | string[] | number[] | null;

export interface FormField {
    name: string;
    label: string;
    type: InputType;
    placeholder?: string;
    defaultValue: FormFieldValue
    disabled?: boolean;
    readonly?: boolean;
}

export interface SelectOption {
    label: string
    value: FormFieldValue
    disabled?: boolean
}

export interface InputValidationRules {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    pattern?: string;  /** Use string representation of regex for JSON safety over REST APIs */
    customValidator?: string; // Identifier for custom Angular/Nest validators
}

export interface BaseFormField extends FormField {
    options?: SelectOption[]; // For select, radio, multi-checkbox
    validation?: InputValidationRules;
    order?: number;  /** Structural ordering/layout properties for dynamic dynamic UI grids */
    className?: string;
}

export interface FormSchema {
    id: string;
    title: string;
    fields: BaseFormField[];
}