import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { JsonPipe, NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { IDynamicFieldModel } from './model/dynamicFieldModel';
import { DynamicFieldComponentComponent } from './dynamic-field-component/dynamic-field-component.component';
import { DataServiceService, IDropDownMenuOption } from './service/data-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DynamicFieldComponentComponent, RouterOutlet, ReactiveFormsModule,NgFor, NgSwitch, NgSwitchCase, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  dynamicFields!: IDynamicFieldModel[]
  myForm!: FormGroup;
  sectionOption!: IDropDownMenuOption;

  constructor(private fb: FormBuilder, private api: DataServiceService){}

  

  ngOnInit(): void {
    this.api
        .getDropDownmenuOptions()
        .subscribe(data=>{
          this.sectionOption = data
        });


    this.dynamicFields = [{
      id: 'select-1',
      type: 'select',
      label: 'Please select value',
      selectMenuOpton: this.sectionOption
    },
    {
      id: 'text-1',
      type: 'text',
      label: 'Please enter value',
      value: '',
      validators: [Validators.required, Validators.minLength(3)]
    },
    {
      id: 'text-3',
      type: 'number',
      label: 'Please enter number',
      value: 0,
      validators: [Validators.required, Validators.min(10)]
    }]

    this.myForm = this.fb.group({})


    this.dynamicFields.forEach(x => {
      const formControl = this.fb.control(x.value, x.validators);
      this.myForm.addControl(x.id, formControl);
    })
  }

  

}
