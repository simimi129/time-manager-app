import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Habit } from 'modules/habits/Habit.model';

@Component({
  selector: 'app-habit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habit.component.html',
  styleUrl: './habit.component.css',
})
export class HabitComponent {
  @Input() habit!: Habit;
}
