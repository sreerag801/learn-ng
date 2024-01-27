import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { BesicInfoComponent } from './besic-info/besic-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgFor, ReactiveFormsModule, AddressComponent, BesicInfoComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  

  ngOnInit(): void {
    this.myForm = this.fb.group({
      password: this.fb.control(null, [Validators.required, Validators.min(2)]),
      confirmPassword: this.fb.control(null, [Validators.min(2)])},
    { validators: [this.valuesAreEqual('password', 'confirmPassword')]})
  }

  private valuesAreEqual(
    controlNameA: string,
    controlNameB: string
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const fromGroup = control as FormGroup;
      let password = fromGroup.get(controlNameA)?.value;
      let confirmPassword = fromGroup.get(controlNameB)?.value;
      if(password === confirmPassword){
        return null;
      }
      else{
        return {notMatched: true}
      }
    }
  }

}
