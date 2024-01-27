import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AppCardComponent } from './app-card/app-card.component';
import { BesicInfoComponent } from './besic-info/besic-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgFor, ReactiveFormsModule, AddressComponent, BesicInfoComponent, NgIf, 
    AppCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private fb: FormBuilder){}

  

  ngOnInit(): void {
    
  }

  

}
