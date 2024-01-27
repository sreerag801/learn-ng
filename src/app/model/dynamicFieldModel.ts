import { ValidatorFn } from "@angular/forms";
import { IDropDownMenuOption } from "../service/data-service.service";

export interface IDynamicFieldModel {
 id: string;
 type: 'text' | 'select' | 'number';
 label: string;
 selectMenuOpton?: IDropDownMenuOption;
 value?: string | number;
 validators?: ValidatorFn[]
}