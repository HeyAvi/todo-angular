import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSubmitFormComponent } from './todo-submit-form.component';

describe('TodoSubmitFormComponent', () => {
  let component: TodoSubmitFormComponent;
  let fixture: ComponentFixture<TodoSubmitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoSubmitFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSubmitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
