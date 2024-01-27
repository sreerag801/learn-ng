import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
      label: 'Please select value'
    },
    {
      id: 'text-1',
      type: 'text',
      label: 'Please enter value'
    }]

    this.myForm = this.fb.group({})


    this.dynamicFields.forEach(x => {
      this.myForm.addControl(x.id, this.fb.control(null));
    })
  }

  

}
