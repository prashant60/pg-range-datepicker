# PG Range Datepicker

A datepicker (single or range) for your angular app.

- Select single date or a date range
- Can pick from 2 months together
- Select single date or a range
- No moment.js needed. Works with javascript Date

## Getting started

### Installation

- Install by executing `npm install pg-range-datepicker` or `yarn add pg-range-datepicker`.
- Import by adding `import { PgRangeDatepickerModule } from 'pg-range-datepicker'`.
- Use by adding `<pg-range-datepicker></pg-range-datepicker>`.

### Usage

Here's an example of basic usage:

app.module.ts
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { PgRangeDatepickerModule } from 'pg-range-datepicker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PgRangeDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

app.component.html
```html
<pg-range-datepicker 
    [selectedDate]="(selectedDate)"  [selectedDateEnd]="(selectedDateEnd)">
</pg-range-datepicker>
```

app.component.ts
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent imlements OnInit {
    selectedDate = new Date();
    selectedDateEnd = new Date();
    
    constructor() {}

    ngOnInit() {}
}
```

## User guide

#### Props


| Prop name            | Description                                                                                                                                                                                                                                  | Default value           | Example values                                                                                                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [(selectedDate)]     | Set or get the date.                                                                                                                                                                                                                         | `undefined`             | `new Date()`                                                                                                                                                                                                        |
| [(selectedDateEnd)]  | Set or get the end date for the range selector.                                                                                                                                                                                              | `undefined`             | `new Date()`                                                                                                                                                                                                        |
| [allowRange]         | Allow selecting the date range                                                                                                                                                                                                               | `true`                  | `true`                                                                                                                                                                                                              |
| [allowClear]         | Display clear btn after date is selected.                                                                                                                                                                                                    | `true`                  | `true`                                                                                                                                                                                                              |
| [displayTwoMonths]   | Show 2 months calendar on the datepicker.                                                                                                                                                                                                    | `true`                  | `true`                                                                                                                                                                                                              |
| [disablePastDates]   | Disable all the dates less than today's date.                                                                                                                                                                                                | `false`                 | `false`                                                                                                                                                                                                             |
| [disabledDates]      | List of dates you want to disable.                                                                                                                                                                                                           | `[]`                    | `[new Date(new Date().setDate(20)), new Date(new Date().setDate(25)), new Date(new Date().setDate(26))]`                                                                                                            |
| [min]                | Minimum date that the user can select.                                                                                                                                                                                                       | `undefined`             | `new Date()`                                                                                                                                                                                                        |
| [max]                | Maximum date that the user can select.                                                                                                                                                                                                       | `undefined`             | `new Date()`                                                                                                                                                                                                        |
| [disabled]           | Whether the date picker should be disabled.                                                                                                                                                                                                  | `false`                 | `false`                                                                                                                                                                                                             |


## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/prashant60.png?s=100" width="100">
    </td>
    <td>
      Prashant Goel<br />
      <a href="mailto:prashantgoel60@gmail.com">prashantgoel60@gmail.com</a><br />
    </td>
  </tr>
</table>

## Thank you

## Keywords
* Date picker
* Date Range picker
* Angular Date picker
* 2 months date picker
* Angular2+
* typescript