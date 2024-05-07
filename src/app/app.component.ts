import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/type-users/users';
// import { CommonModule } from '@angular/common';
// import { count } from 'rxjs';
// import { PhoneComponent } from './shared/components/phone/phone.component';
// import {
//   DropDown,
//   GlobalTypesComponent,
//   imgSize,
// } from '../models/global-types/global-types.component';
// import { UserProfileComponent } from './shared/components/user-profile.component';
// import { TimelineComponent } from './shared/components/timeline.component';
// import { AccordionItemComponent } from './shared/components/accordion-item.component';
// import { AlertComponent } from './shared/components/alert.component';
// import { DropdownComponent } from './shared/components/dropdown.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // CommonModule,
    // PhoneComponent,
    // GlobalTypesComponent,
    // UserProfileComponent,
    // TimelineComponent,
    // AccordionItemComponent,
    // AlertComponent,
    // DropdownComponent,
    CommonModule,
    RouterOutlet,
    RouterLink, 
    RouterLinkActive,
    NavbarComponent,

  ],
  template: `
    <!-- <div class="centered-page sm">
      <h1 class="page-title">Counter Demo with Signal</h1>

      <button class="btn" (click)="dec()">-</button>    
      <span class="text-2xl">{{ counter() }}</span>
      <button class="btn" (click)="inc()">+</button>

      <button class="btn" (click)="reset()">reset</button>
    </div>
    <div class="centered-page"><p [hidden]="!isZero()">is zero</p></div>
    <div class="centered-page">
      <button (click)="doNothing()">Bottone</button>
    </div> -->

    <!-- @for (todo of todos(); track todo.id) {
    <input
      type="checkbox"
      [checked]="todo.completed"
      (change)="checked(todo)"
    />
    <li [ngClass]="{ 'line-through': todo.completed }">{{ todo.title }}</li>
    }
    <button (click)="doNothing()">asd</button>
     -->

    <!-- <app-phone [src]="url" [alt]="alt" [showTitile]="show" [size]="imgSize"></app-phone>
    <button class="btn" (click)="show=!show">Show description</button> -->
    <!-- @if(visible){<app-user-profile [id]='1'/>}
    <button (click)="visible = !visible">
        toggle
    </button> -->
    <!-- <button class="btn" (click)="addItem()">Add Item</button>
    <button class="btn" (click)="modifyID()">bottone</button>
    <button class="btn" (click)="doNothing()">fai nulla</button>
    <app-user-profile [id]="id" [items]="list" /> -->
    <!-- <app-dropdown class="flex justify-center" [itemList]="list" (dropEvent)="doSomething($event)"></app-dropdown>
    <app-timeline
      class="flex justify-center"
      [items]="timelineList"
      [isVertical]="isVertical"
    />
    <button class="btn flex justify-center" (click)="isVertical = !isVertical">
      Vertical timeline
    </button>
    @for (item of textList; track $index; let first =
    $first){<app-accordion-item [textList]="textList" [i]="$index">
      <button class="btn btn-info" (click)="hello()">
        Click me
      </button></app-accordion-item
    >}
    <app-alert (onCancel)="cancel()" (onConfirm)="approve()" variant="verde">
      <span>avvertenze: tantissime avvertenze da darvi</span>
    </app-alert> -->
    <app-navbar></app-navbar>
    <hr>
    <router-outlet />
   
    
`,
  styles: [``],
})
export class AppComponent {
  // "node_modules/bootstrap/dist/css/bootstrap.min.css", <---- Bootstrap include
  // constructor() {
  //   effect(() => {
  //     console.log('ciao', this.counter());
  //     localStorage.setItem('counter', JSON.stringify(this.counter()));
  //   });
  // }
  // counter = signal(0);
  // doNothing() {}
  // isZero = computed(() => {
  //   console.log('entered');
  //   return this.counter() === 0;
  // });
  // dec() {
  //   this.counter.update((prev) => prev - 1);
  // }
  // inc() {
  //   this.counter.update((prev) => prev + 1);
  // }
  // reset() {
  //   this.counter.set(0);
  // }
  // checked(element: Todo) {
  //   console.log('entered');
  //   element.completed = !element.completed;
  // }
  // doNothing() {}
  // todos = signal<Todo[]>([
  //   { id: 1, title: 'todo 1', completed: true },
  //   { id: 2, title: 'todo 2', completed: false },
  //   { id: 3, title: 'todo 3', completed: true },
  // ]);
  // url = 'assets/images/how_to_take_vertical_landscape_photos.webp'
  // alt = 'foto'
  // show = false;
  // imgSize: imgSize = {size: 'xl'};
  // list = [1, 2, 3];
  // visible = true;
  // id: number = 1;
  // doNothing() {}
  // addItem(){
  //   this.list = [... this.list, 4]
  // }
  // modifyID() {
  //   if (this.id < 10) {
  //     this.id++;
  //   } else {
  //     this.id = 1;
  //   }
  // }

  // timelineList = [
  //   { start: '2014', end: 'description' },
  //   { start: '2015', end: 'description' },
  //   { start: '2018', end: 'description' },
  //   { start: '2022', end: 'description' },
  //   { start: '2024', end: 'description' },
  // ];
  // isVertical: boolean = false;

  // textList = [
  //   { title: 'Title 1', description: 'lorem ipsus dolor sit amen...' },
  //   { title: 'Title 2', description: 'lorem ipsus dolor sit amen...' },
  //   { title: 'Title 3', description: 'lorem ipsus dolor sit amen...' },
  //   { title: 'Title 4', description: 'lorem ipsus dolor sit amen...' },
  //   { title: 'Title 5', description: 'lorem ipsus dolor sit amen...' },
  // ];

  // hello() {
  //   alert('Hello!');
  // }
  // approve() {
  //   window.alert('approve!');
  // }
  // cancel() {
  //   window.alert('cancel');
  // }
  // list: DropDown[] = [
  //   { label: 'item 1', value: '2000120' },
  //   { label: 'item 2', value: '2000121' },
  //   { label: 'item 3', value: '2000122' },
  //   { label: 'item 4', value: '2000123' },
  // ];
  // doSomething(event: DropDown){
  //   console.log(event)
  // }
  

}

// interface Todo {
//   id: number;
//   title: string;
//   completed: boolean;
// }
