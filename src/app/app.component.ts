import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppCardComponent, CardHeaderDirective } from './app-card/app-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppCardComponent, CardHeaderDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private fb: FormBuilder){}

  

  ngOnInit(): void {
    
  }

  

}
