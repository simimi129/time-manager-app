import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from 'core/navigation/navigation.component';
import { DateService } from 'services/date-service/date.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private dateService = inject(DateService);

  title = 'frontend';

  ngOnInit(): void {
    this.dateService.update();
  }
}
