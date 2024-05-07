import { Component } from '@angular/core';
import { TimelineComponent } from '../../components/timeline.component';

@Component({
  selector: 'app-timeline-demo',
  standalone: true,
  imports: [TimelineComponent],
  template: `
    <app-timeline [items]="prova"></app-timeline>
    <app-timeline [isVertical]="true" [items]="prova"></app-timeline>

  `,
  styles: ``
})
export default class TimelineDemoComponent {
  prova: {start:string, end:string}[]=[{start: "prova", end: "prova"}, {start: "prova", end: "prova"}, {start: "prova", end: "prova"}, {start: "prova", end: "prova"}, ]
}
