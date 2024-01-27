import { ValidatorFn } from "@angular/forms";

export interface IDynamicFieldModel {
 id: string;
 type: 'text' | 'select' | 'number';
 label: string;
 selectMenuOpton?: {
    [key: string]: string
 };
 value?: string | number;
 validators?: ValidatorFn[]
}