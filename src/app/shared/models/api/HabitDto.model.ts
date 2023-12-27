import { Habit } from 'modules/habits/models/Habit.model';
import { isDoneOnDate } from 'modules/habits/models/isDoneOnDate.model';

export class HabitDto {
  name: string;
  color: string;
  streak: number;
  isDoneOnDates: isDoneOnDate[];

  constructor(habit: Habit) {
    this.name = habit.name;
    this.color = habit.color;
    this.streak = habit.streak;
    this.isDoneOnDates = habit.isDoneOnDates;
  }
}
