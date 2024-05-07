import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';
import { GlobalTypesComponent, imgSize } from '../../../../models/global-types/global-types.component';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [GlobalTypesComponent],
  templateUrl: './phone.component.html',
  styles: ``,
})
export class PhoneComponent {
  @Input({alias: 'src', required: true }) 
  url: string = 'assets/images/how_to_take_vertical_landscape_photos.webp';
  @Input({
    transform: (val: string) => {
      return val.toUpperCase();
    },
  })
  alt: string = 'immagine';
  @Input({ required: true, transform: booleanAttribute }) 
  showTitile: boolean = false;
  @Input({transform: (val: imgSize) => {
    switch (val.size) {
      case 'sm': return 50;
      case 'md': return 75;
      default:
      case 'xl': return 100;
    }
  }})
  size : imgSize = {size: 'sm'};

}
