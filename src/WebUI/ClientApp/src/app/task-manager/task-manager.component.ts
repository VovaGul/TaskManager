import { Component, OnInit } from '@angular/core';
import {Board} from "./Board";

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  boards: Board[] = [new Board("Беклог"), new Board("В процессе"), new Board("Завершено")];
  selectedBoard: Board;
  constructor() { }

  ngOnInit(): void {
  }

}
