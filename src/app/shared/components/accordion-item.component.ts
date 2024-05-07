import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,

  template: `
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" [checked]="selected()" />
      <div class="collapse-title text-xl font-medium">
        {{ textList[i].title }}
      </div>
      <div class="collapse-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: ``,
})
export class AccordionItemComponent {
  selected(){
    if(this.i==0){return true}else{return false}
  }
  @Input() i: number=0
  @Input() textList: { title: string; description: string }[] = [];
  prova(){
    console.log(this.textList)
  }
}
