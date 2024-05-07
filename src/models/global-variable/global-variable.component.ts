import { Component } from '@angular/core';

@Component({
  selector: 'app-global-variable',
  standalone: true,
  imports: [],
  template: `
    <p>
      global-variable works!
    </p>
  `,
  styles: ``
})
export class GlobalVariableComponent {

}
export const homepage: string= 'demo1'
export const portfolio: string= 'demo2'
export const aboutpage: string= 'demo3'
