import { KeyValuePipe, NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { IDynamicFieldModel } from '../model/dynamicFieldModel';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-dynamic-field-component',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, ReactiveFormsModule, KeyValuePipe, NgFor, NgIf],
  templateUrl: './dynamic-field-component.component.html',
  styleUrl: './dynamic-field-component.component.css'
})
export class DynamicFieldComponentComponent {
  @Input() formItem!: IDynamicFieldModel;
  form!:  FormGroup;


  constructor(private rootFormGroup: FormGroupDirective,
    private api: DataServiceService){
    this.form = this.rootFormGroup.control as FormGroup;
  }

  addNewDropDownItem(formItem: IDynamicFieldModel){

    this.api
        .addItemToDropDown('randon'+ Math.random().toString(), Math.random().toString())
        .subscribe(data=>{
            formItem.selectMenuOpton = data;
        });
  }
}
