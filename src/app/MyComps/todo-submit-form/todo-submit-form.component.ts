import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/todos';

@Component({
  selector: 'app-todo-submit-form',
  templateUrl: './todo-submit-form.component.html',
  styleUrls: ['./todo-submit-form.component.css']
})
export class TodoSubmitFormComponent implements OnInit {
  title: string;
  desc: string;
  @Output() todoSubmit: EventEmitter<Todos> = new EventEmitter();
  @Input() todo: Todos[];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.title && this.desc) {
      this.todoSubmit.emit({
        sno: this.todo.length + 1,
        title: this.title,
        description: this.desc,
      });
      this.title = '';
      this.desc = '';
    }
  }

}
