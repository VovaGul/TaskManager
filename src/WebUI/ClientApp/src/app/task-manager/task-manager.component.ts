import {Component, OnInit, TemplateRef} from '@angular/core';
import {Board} from "./Board";
import {Task} from "./Task";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {CreateTodoListCommand, TodoListDto} from "../web-api-client";

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  boards: Board[] = [
    new Board(1,"Беклог", [
      new Task("Сделать важное", false,1, "ололол олол"),
      new Task("Сделать важное", false,2, "ололол олол"),
      new Task("Сделать важное", false,3, "ололол олол"),
      new Task("Сделать важное", false,4, "ололол олол")]),
    new Board(2, "В процессе", [
      new Task("Сделать важное", false,5, "ололол олол"),
      new Task("Сделать важное", false,6, "ололол олол"),
      new Task("Сделать важное", false,7, "ололол олол"),
      new Task("Сделать важное", false,8, "ололол олол")]),
    new Board(3, "Завершено", [
      new Task("Сделать важное", false,9, "ололол олол"),
      new Task("Сделать важное", false,10, "ололол олол"),
      new Task("Сделать важное", false,11, "ололол олол"),
      new Task("Сделать важное", false,12, "ололол олол")])];
  selectedBoard: Board;
  newListModalRef: BsModalRef;
  newBoardEditor: any = {};
  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  dropBoard(event: CdkDragDrop<Board[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  showNewBoardModal(template: TemplateRef<any>): void {
    this.newListModalRef = this.modalService.show(template);
    setTimeout(() => document.getElementById('title').focus(), 250);
  }

  newBoardCancelled(): void {
    this.newListModalRef.hide();
    this.newBoardEditor = {};
  }

  addBoard(): void {
    const list = {
      id: this.getRandomArbitrary(0, 1000000000),
      title: this.newBoardEditor.title,
      items: []
    } as Board;

    this.boards.push(list);
    this.selectedBoard = list;
    this.newListModalRef.hide();
    this.newBoardEditor = {};
  }

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  /**
   * Returns a random integer between min (inclusive) and max (inclusive).
   * The value is no lower than min (or the next integer greater than min
   * if min isn't an integer) and no greater than max (or the next integer
   * lower than max if max isn't an integer).
   * Using Math.round() will give you a non-uniform distribution!
   */
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
