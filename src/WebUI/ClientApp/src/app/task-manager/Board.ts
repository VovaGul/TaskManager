import {Task} from "./Task";

export class Board {
  id?: number;
  title?: string | undefined;
  colour?: string | undefined;
  items?: Task[];

  constructor(title: string) {
    this.title = title;
  }
}
