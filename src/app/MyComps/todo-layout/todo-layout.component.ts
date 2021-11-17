import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/todos';

@Component({
  selector: 'app-todo-layout',
  templateUrl: './todo-layout.component.html',
  styleUrls: ['./todo-layout.component.css']
})
export class TodoLayoutComponent implements OnInit {

  @Input() todo: Todos;
  @Output() todoDelete: EventEmitter<Todos> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.todoDelete.emit(this.todo);
  }

}
