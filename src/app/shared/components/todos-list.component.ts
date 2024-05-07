// features/demo3/components/todos-list.component.ts
import { JsonPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../models/todo/todo.module';{}

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [
    NgClass,
    JsonPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,

  template: `
      <ul>
          @for (todo of todos; track todo.id) {
              <li class="flex justify-between">
                  <div class="flex gap-3">
                      <input
                              type="checkbox" [checked]="todo.completed"
                              (change)="toggleTodo.emit(todo)"
                      >
                      <span [ngClass]="{'line-through': todo.completed}">
                            {{todo.title}}
                        </span>
                  </div>
                  <button (click)="removeTodo.emit(todo)">❌</button>
              </li>
          }
      </ul>
  `,
  styles: ``
})
export class TodosListComponent {
  @Input() todos: Todo[] = []
  @Output() toggleTodo = new EventEmitter<Todo>()
  @Output() removeTodo = new EventEmitter<Todo>()
}