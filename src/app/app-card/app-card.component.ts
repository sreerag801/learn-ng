import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, Directive, Input, TemplateRef } from '@angular/core';


@Directive({
  selector: 'app-card-header',
  standalone: true
})
export class CardHeaderDirective{}

@Directive({
  selector: 'app-card-body',
  standalone: true
})
export class CardBodyDirective{}

// @Directive({
//   selector: 'cardMainContent',
//   standalone: true
// })
// export class CardMainDirective{}

@Component({
  selector: 'app-app-card',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet],
  templateUrl: './app-card.component.html',
  styleUrl: './app-card.component.css'
})
export class AppCardComponent {
  @Input() title!: string;
  @ContentChild('cardMainContent') cardMainContent!: TemplateRef<any>

  constructor() {}
}
