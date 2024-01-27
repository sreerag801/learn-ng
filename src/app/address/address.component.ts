import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit {
  form!: FormGroup;
  
  constructor(private rootFormGroup: FormGroupDirective){}
  
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
