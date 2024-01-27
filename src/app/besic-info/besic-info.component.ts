import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-besic-info',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './besic-info.component.html',
  styleUrl: './besic-info.component.css'
})
export class BesicInfoComponent implements OnInit{

  @Input() formControlName!: string
  form!: FormGroup;
  
  constructor(private rootFormGroup: FormGroupDirective){
  }
  
  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formControlName) as FormGroup;
  }
}
