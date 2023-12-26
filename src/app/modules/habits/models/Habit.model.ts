import { isDoneOnDate } from './isDoneOnDate.model';

export class Habit {
  id!: number;
  title!: string;
  isDoneOnDates!: isDoneOnDate[];
  color!: string;
  streak!: number;

  constructor(
    id: number,
    title: string,
    isDoneOnDates: isDoneOnDate[],
    color: string
  ) {
    this.id = id;
    this.title = title;
    this.isDoneOnDates = isDoneOnDates;
    this.color = `var(--${color})`;
  }

  isDoneOnDate(date: Date): boolean {
    return this.isDoneOnDates.some(
      (isDoneOnDate) => isDoneOnDate.date === date.toISOString().split('T')[0]
    );
  }

  toggleDoneOnDate(date: Date) {
    if (this.isDoneOnDate(date)) {
      this.isDoneOnDates = this.isDoneOnDates.filter(
        (isDoneOnDate) => isDoneOnDate.date !== date.toISOString().split('T')[0]
      );
    } else {
      this.isDoneOnDates.push({
        date: date.toISOString().split('T')[0],
        isDone: true,
      });
    }
  }
}
