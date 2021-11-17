import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string;
  todos: Todos[];

  constructor() {
    this.localItem = localStorage.getItem('todos') || '[]';
    if (this.localItem !== '[]') {
      this.todos = JSON.parse(this.localItem);
    }else{
      this.todos = [];
    }
    
    console.log(this.todos);
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todos) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todos) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
