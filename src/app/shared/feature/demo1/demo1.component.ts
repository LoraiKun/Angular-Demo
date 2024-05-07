import { Component, Input, input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- <p>
      {{titled}}, {{title}}
    </p> -->
    
  `,
  styles: ``
})
export default class Demo1Component {
  titled: string|undefined;
  @Input() title = '';
 constructor(private activateRoute: ActivatedRoute){
  console.log(this.activateRoute.snapshot.data['title'])
  this.activateRoute.data.subscribe(res => {
    this.titled=res['title']
  })

}
  


 
}
