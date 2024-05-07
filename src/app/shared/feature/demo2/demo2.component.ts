import { Component, computed, inject, signal } from '@angular/core';
import { Users } from '../../../../models/type-users/users';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: `
    <!-- users name list -->
    @for (user of result$ | async; track user.id) {
    <li>{{ user.name }}</li>
    }
    <br>
    <br>
    <br>
    <!-- user name list with signal -->
    @for (user of users(); track user.id) {
    <li>{{ user.name }}</li>
    }
    <br>
    <br>
    <br>
    <!-- user name list rjx + signals -->
    @for (user of usersJsx(); track user.id) {
    <li>{{ user.name }}</li>
    }
    <pre>{{names() | json}}</pre>
  `,
  styles: ``,
})
export default class Demo2Component {
  router = inject(Router);
  // user name list rjx
  result$ = inject(HttpClient).get<Users[]>(
    'https://jsonplaceholder.typicode.com/users'
  );
  // user name list with singals
  users = signal<Users[]>([])
  http = inject(HttpClient)
  // user name list with signal + rjx
  usersJsx = toSignal(inject(HttpClient).get<Users[]>(
    'https://jsonplaceholder.typicode.com/users'
  ))
  names = computed(()=>this.usersJsx()?.map(u => u.name))

  constructor() {
    //user name list with signals constructor
    this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe(res => {
      this.users.set(res)
    })

    // event router output url
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
      }
    });
  }
}
