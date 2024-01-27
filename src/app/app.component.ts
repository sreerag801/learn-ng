import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppCardComponent, CardBodyDirective, CardHeaderDirective, CardMainDirective } from './app-card/app-card.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { IDynamicFieldModel } from './model/dynamicFieldModel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgSwitch, NgSwitchCase],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  dynamicField!: IDynamicFieldModel

  constructor(private fb: FormBuilder){}

  

  ngOnInit(): void {
    this.dynamicField = {
      type: 'select',
      label: 'Please select value'
    }
  }

  

}
