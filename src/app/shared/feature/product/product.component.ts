import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  template: `
    <p>
      product works!
    </p>
  `,
  styles: ``
})
export default class ProductComponent {
  productId: string | undefined;
  activeRoute = inject(ActivatedRoute)
  constructor(){
    console.log(this.activeRoute.snapshot.params['productId'])
    this.activeRoute.params.subscribe(params => {
      console.log(params)
      this.productId = params['productId']
    })
  }
}
