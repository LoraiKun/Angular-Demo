import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-todos-summary',
  standalone: true,
  imports: [],
  template: ` <div>{{ completed }} completed | {{ todos }} todos</div> `,
  changeDetection: ChangeDetectionStrategy.OnPush,

  styles: ``,
})
export class TodosSummaryComponent {
  @Input() completed: number | undefined;
  @Input() todos: number | undefined;
}
