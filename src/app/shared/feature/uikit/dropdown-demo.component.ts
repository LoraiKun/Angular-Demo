import { Component } from '@angular/core';
import { DropdownComponent } from '../../components/dropdown.component';
import { DropDown } from '../../../../models/global-types/global-types.component';

@Component({
  selector: 'app-dropdown-demo',
  standalone: true,
  imports: [DropdownComponent],
  template: `
    <app-dropdown [itemList]="prova"></app-dropdown>
  `,
  styles: ``
})
export default class DropdownDemoComponent {
  prova:  DropDown[]= [{label: 'test', value: 50}, {label: 'test', value: 50}, {label: 'test', value: 50}, {label: 'test', value: 50}]
}
