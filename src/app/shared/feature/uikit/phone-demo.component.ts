import { Component } from '@angular/core';
import { PhoneComponent } from '../../components/phone/phone.component';

@Component({
  selector: 'app-phone-demo',
  standalone: true,
  imports: [PhoneComponent],
  template: `
    <app-phone src="assets/images/how_to_take_vertical_landscape_photos.webp" showTitile="test"></app-phone>
  `,
  styles: ``
})
export default class PhoneDemoComponent {

}
