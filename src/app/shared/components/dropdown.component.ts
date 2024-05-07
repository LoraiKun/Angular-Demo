import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DropDown, GlobalTypesComponent } from '../../../models/global-types/global-types.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [GlobalTypesComponent, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,

  template: `
    <details class="dropdown">
      <summary class="m-1 btn">open or close</summary>
      <ul
        class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
      >
      @for (item of itemList; track $index) {
        <li (click)="dropEvent.emit(item)"><a>{{item.label}}</a></li>
      }
      </ul>
    </details>
    <!-- <Pre>{{itemList| json}}</Pre> -->
  `,
  styles: ``,
})
export class DropdownComponent {
  @Input() itemList: DropDown[] = []
  @Output() dropEvent= new EventEmitter<DropDown>()
}
