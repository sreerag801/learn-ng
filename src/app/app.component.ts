import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppCardComponent, CardBodyDirective, CardHeaderDirective, CardMainDirective } from './app-card/app-card.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgSwitch, NgSwitchCase],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  type!: 'text' | 'select';

  constructor(private fb: FormBuilder){}

  

  ngOnInit(): void {
    this.type = 'select'
  }

  

}
