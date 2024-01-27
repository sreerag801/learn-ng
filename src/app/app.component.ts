import { JsonPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { BesicInfoComponent } from './besic-info/besic-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgFor, ReactiveFormsModule, AddressComponent, BesicInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  get colorsList(): FormArray {
    return this.myForm.get('colors') as FormArray;
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      colors: this.fb.array([
        this.fb.group({name: 'red'}),
        this.fb.group({name: 'green'}),
        this.fb.group({name: 'yellow'}),
        this.fb.group({name: 'orange'}),
        this.fb.group({name: 'purple'})
      ])
    })
  }

  remove(index: number){
    this.colorsList.removeAt(index);
  }

  AddColor(){
    this.colorsList.push(this.fb.group({name: ''}));
  }
}
