export interface IDynamicFieldModel {
 id: string;
 type: 'text' | 'select';
 label: string;
 selectMenuOpton?: {
    [key: string]: string
 };
 value?: string;
 isRequied?: boolean;
}