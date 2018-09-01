import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <input type="test" [value]="name">
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
  isHappy: boolean = true
  name: string = 'Chris' 
  numberOne: number = 1
  numberTwo: number = 2
  constructor () {
    this.title = 'Ultimate Angular'
  }
}