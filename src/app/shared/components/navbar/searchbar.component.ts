import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  template: `
    @if (searchmode) {
          <!-- searchbar start-->
        <label class="input input-bordered flex items-center gap-2 ">
          <input type="text" class="" placeholder="Search" (blur)="search()" [autofocus]="autofocus(searchbarinput)" #searchbarinput /> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </label>
        <!-- searchbar end -->
        } @else {
          <!-- searchbar icon -->
        <button class="btn btn-ghost btn-circle" (click)="search()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <!-- searchbar icon end -->
        }
  `,
  styles: `
  
  `
})
export class SearchbarComponent {
  autofocus(input:HTMLInputElement){
    input.focus() 
   }
   searchmode: boolean = false;
   search(){
    this.searchmode= !this.searchmode
  }
  
}
