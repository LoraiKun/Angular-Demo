import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorComponent } from '../../components/http-error.component';
import { TodosSummaryComponent } from '../../components/todos-summary.component';
import { TodosFormComponent } from '../../components/todos-form.component';
import { TodosListComponent } from '../../components/todos-list.component';
import { TodosService } from './services/todos-service';

@Component({
  selector: 'app-demo3',
  standalone: true,
  imports: [
    CommonModule,
    HttpErrorComponent,
    TodosSummaryComponent,
    TodosFormComponent,
    TodosListComponent,
  ],
  providers:[TodosService],
  template: `
    <div class="centered-page sm flex flex-col gap-3">
      <h1 class="page-title">Todo List</h1>

      @if (todoService.error()) {
      <app-http-error />
      }

      <!--RECAP-->
      <app-todos-summary
        [completed]="todoService.totalCompleted()"
        [todos]="todoService.totalTodos()"
      />

      <!--Form-->
      <app-todos-form (addTodo)="todoService.addTodo($event)" />

      <!--List-->
      <app-todos-list
        [todos]="todoService.todos()"
        (removeTodo)="todoService.removeTodo($event)"
        (toggleTodo)="todoService.toggleTodo($event)"
      />
    </div>
  `,
})
export default class Demo3Component implements OnInit {
  todoService = inject(TodosService);

  ngOnInit(): void {
    this.todoService.load();
  }
}
