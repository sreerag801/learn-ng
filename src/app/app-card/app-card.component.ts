import { Component, Directive, Input } from '@angular/core';


@Directive({
  selector: 'app-card-header',
  standalone: true
})
export class CardHeaderDirective{}

@Component({
  selector: 'app-app-card',
  standalone: true,
  imports: [],
  templateUrl: './app-card.component.html',
  styleUrl: './app-card.component.css'
})
export class AppCardComponent {
  @Input() title!: string;
}
