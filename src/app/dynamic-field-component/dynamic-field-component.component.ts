import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IDynamicFieldModel } from '../model/dynamicFieldModel';

@Component({
  selector: 'app-dynamic-field-component',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, ReactiveFormsModule],
  templateUrl: './dynamic-field-component.component.html',
  styleUrl: './dynamic-field-component.component.css'
})
export class DynamicFieldComponentComponent implements OnInit {
  @Input() formItem!: IDynamicFieldModel;
  @Input() form!:  FormGroup;
  

  constructor(){}

  ngOnInit(): void {
    
  }
}
