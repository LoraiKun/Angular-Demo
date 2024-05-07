import { Component, Type } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  template: `
    <p>
      global-types works!
    </p>
  `,
  styles: ``
})
export class GlobalTypesComponent {

}
export interface imgSize {
  size: 'xl' | 'sm' | 'md'
} 

export type DropDown= {
  label: string;
  value: any;
}