import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { JsonPipe, NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { IDynamicFieldModel } from './model/dynamicFieldModel';
import { DynamicFieldComponentComponent } from './dynamic-field-component/dynamic-field-component.component';

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

  constructor(private fb: FormBuilder){}

  

  ngOnInit(): void {
    this.dynamicFields = [{
      id: 'select-1',
      type: 'select',
      label: 'Please select value',
      selectMenuOpton: {
        'item-1': 'item 1',
        'item-2': 'item 2',
        'item-3': 'item 3'
      }
    },
    {
      id: 'text-1',
      type: 'text',
      label: 'Please enter value',
      isRequied: true
    }]

    this.myForm = this.fb.group({})


    this.dynamicFields.forEach(x => {
      const formControl = this.fb.control(x.value, x.isRequied ? Validators.required : null);
      this.myForm.addControl(x.id, formControl);
    })
  }

  

}
