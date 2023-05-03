import {Task} from "./Task";

export class Board {
  id?: number;
  title?: string | undefined;
  colour?: string | undefined;
  tasks?: Task[];

  constructor(id: number, title: string, tasks: Task[]) {
    this.id = id;
    this.title = title;
    this.tasks = tasks;
  }
}
