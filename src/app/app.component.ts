import { JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgFor, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-angular';
  items = [
    {key: 0, value: '---Select--'},
    {key: 1, value: 'India'},
    {key: 2, value: 'USA'},
    {key: 3, value: 'Russia'}
  ];

  selectedItem = new FormControl(this.items[1]);
}
