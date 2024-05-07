import { Component } from '@angular/core';
import { AlertComponent } from '../../components/alert.component';

@Component({
  selector: 'app-alert-demo',
  standalone: true,
  imports: [AlertComponent],
  template: `
    <app-alert></app-alert>
    <app-alert variant="rosso"></app-alert>
    <app-alert variant="blu"></app-alert>
    <app-alert variant="verde"></app-alert>
  `,
  styles: ``
})
export default class AlertDemoComponent {

}
