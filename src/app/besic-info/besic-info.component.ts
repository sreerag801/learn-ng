import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-besic-info',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './besic-info.component.html',
  styleUrl: './besic-info.component.css'
})
export class BesicInfoComponent implements OnInit{

  form!: FormGroup;
  
  constructor(private rootFormGroup: FormGroupDirective){}
  
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }


}
