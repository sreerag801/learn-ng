import { JsonPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  userForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      basicInfo: this.fb.group({
        name: '',
        sex: '',
        age: 0
      }),
      address: this.fb.group({
        line1:'',
        line2: '',
        zip: ''
      })
    })
  }

}
