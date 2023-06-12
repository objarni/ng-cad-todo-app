import {Component, Input} from '@angular/core';
import {clickAddCalc, clickItemCalc, clickRemoveCalc, initialTodolistCalc, Todo} from "../models/Todolist";

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent {
  todos: Todo[] = initialTodolistCalc();
  @Input() newTodo: string = '';

  onClick(ix: number) {
    this.todos = clickItemCalc(this.todos, ix);
  }

  onRemove(ix: number) {
    this.todos = clickRemoveCalc(this.todos, ix);
  }

  onAddClick() {
    const result = clickAddCalc(this.todos, this.newTodo)
    this.todos = result.todos;
    this.newTodo = result.newTodo;
  }
}
