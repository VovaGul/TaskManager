export class Task {
  id?: number;
  listId?: number;
  title?: string | undefined;
  done?: boolean;
  priority?: number;
  note?: string | undefined;

  constructor(title: string, done: boolean, priority: number, note: string) {
    this.title = title;
    this.done = done;
    this.priority = priority;
    this.note = note;
  }
}
