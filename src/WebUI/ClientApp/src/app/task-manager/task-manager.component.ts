import { Component, OnInit } from '@angular/core';
import {Board} from "./Board";
import {Task} from "./Task";

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  boards: Board[] = [
    new Board("Беклог", [
      new Task("Сделать важное", false,1, "ололол олол"),
      new Task("Сделать важное", false,2, "ололол олол"),
      new Task("Сделать важное", false,3, "ололол олол"),
      new Task("Сделать важное", false,4, "ололол олол")]),
    new Board("В процессе", [
      new Task("Сделать важное", false,5, "ололол олол"),
      new Task("Сделать важное", false,6, "ололол олол"),
      new Task("Сделать важное", false,7, "ололол олол"),
      new Task("Сделать важное", false,8, "ололол олол")]),
    new Board("Завершено", [
      new Task("Сделать важное", false,9, "ололол олол"),
      new Task("Сделать важное", false,10, "ололол олол"),
      new Task("Сделать важное", false,11, "ололол олол"),
      new Task("Сделать важное", false,12, "ололол олол")])];
  selectedBoard: Board;
  constructor() { }

  ngOnInit(): void {
  }

}
