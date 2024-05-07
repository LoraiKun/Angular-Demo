import { Component } from '@angular/core';
import { AccordionItemComponent } from '../../components/accordion-item.component';

@Component({
  selector: 'app-accordion-demo',
  standalone: true,
  imports: [AccordionItemComponent],
  template: `
   <app-accordion-item [textList]="prova" [i]="0">{{prova[0].description}}</app-accordion-item>
  `,
  styles: ``
})
export default class AccordionDemoComponent {
  prova: {title: string, description:string}[]= [{title: "titolo", description: "descrizione"}]
}
