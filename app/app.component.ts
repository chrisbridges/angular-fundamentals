import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <button (click)="handleClick()">
        Change name
      </button>
      <input 
        type="test" 
        [value]="name"
        (input)="handleInput($event)"
        (blur)="handleBlur($event)"
      >
      {{ name }}<p>One way data flow - changing value in input, does not affect name elsewhere</p> 
      <div>
        {{ numberOne + numberTwo }}
      </div>
      <div>
        {{ isHappy ? ':)' : ':(' }}
      </div>
    </div>
  `
})
export class AppComponent {
  title: string
  handleClick () {
    this.name = 'Motto'
  }
  handleInput(event: any) {
    this.name=event.target.value
  }
  handleBlur(event: any) {
    this.name = event.target.value
    console.log(event)
  }
  isHappy: boolean = true
  name: string = 'Chris' 
  numberOne: number = 1
  numberTwo: number = 2
  constructor () {
    this.title = 'Ultimate Angular'
  }
}