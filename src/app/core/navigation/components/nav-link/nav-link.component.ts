import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'nav-link',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.css',
})
export class NavLinkComponent {
  @Input({ required: true }) route!: string;
  @Input({ required: true }) icon!: IconDefinition;
  @Input() text!: string;
}
