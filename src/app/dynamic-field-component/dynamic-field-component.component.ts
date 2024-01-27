import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { IDynamicFieldModel } from '../model/dynamicFieldModel';

@Component({
  selector: 'app-dynamic-field-component',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, ReactiveFormsModule],
  templateUrl: './dynamic-field-component.component.html',
  styleUrl: './dynamic-field-component.component.css'
})
export class DynamicFieldComponentComponent {
  @Input() formItem!: IDynamicFieldModel;
  form!:  FormGroup;


  constructor(private rootFormGroup: FormGroupDirective){
    this.form = this.rootFormGroup.control as FormGroup;
  }
}
