import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-uikit',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <button class="btn" routerLink="accordion">Accordion</button>
    <button class="btn" routerLink="alert">alert</button>
    <button class="btn" routerLink="dropdown">dropdown</button>
    <button class="btn" routerLink="timeline">timeline</button>
    <button class="btn" routerLink="phone">phone</button>
    <div>
      <router-outlet></router-outlet>
      
    </div>
  `,
  styles: ``
})
export default class UikitComponent {

}
