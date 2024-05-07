import { JsonPipe } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `
    <div>{{ userId }}</div>
    <pre>{{ items | json }}</pre>
    {{ render() }}
  `,
  styles: ``,
})
export class UserProfileComponent {
  userId: number | undefined;
  @Input() items: any = [];
  @Input() set id(val: number | undefined) {
    this.userId = val;
    console.log(val);
  }
  timer: number | undefined;

  constructor() {
    console.log('constructor', this.id);

    // this.timer = setInterval(() => {
    //   console.log('timer');
    // }, 1000);
  }

  // ngOnInit() {
  //   console.log('ngOnInit', this.id);
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(this.id)
  // }
  // ngOnDestroy(): void {
  //   clearInterval(this.timer)
  // }
  render() {
    console.log('renderized');
  }
}
