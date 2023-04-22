import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'pg-range-datepicker',
  templateUrl: './pg-range-datepicker.component.html',
  styleUrls: ['./pg-range-datepicker.component.scss']
})
export class PgRangeDatepickerComponent implements OnInit, AfterViewInit {
  @ViewChild('datePicker') datePicker!: ElementRef<any>;
  @ViewChild('dateInput') dateInput!: ElementRef<any>;

  private monthList: string[] = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  weekdays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  @Input() displayTwoMonths: boolean = true;
  @Input() disablePastDates: boolean = false;
  @Input() disabledDates: Date[] = [];
  @Input() allowRange: boolean = true;
  @Input() allowClear: boolean = true;
  @Input() selectedDate: Date | undefined | null;
  @Input() selectedDateEnd: Date | undefined | null;
  @Input() minDate: Date | undefined;
  @Input() maxDate: Date | undefined;
  @Input() disabled: boolean = false;

  @Output() selectedDateChange = new EventEmitter<any>();
  @Output() selectedDateEndChange = new EventEmitter<any>();

  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();
  nextMonth: number = this.currentMonth;
  nextYear: number = this.currentYear;
  lastDayOfCurrMonth: number = 0;
  lastDayOfNextMonth: number = 0;
  currentStartDay: number = 0;
  nextStartDay: number = 0;

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.datePicker.nativeElement.style.visibility = 'hidden';
    }
  }
  
  constructor(private eRef: ElementRef) {
  }

  ngOnInit(): void {
    this.getNextMonthYear();
  }

  ngAfterViewInit(): void {
    this.datePicker.nativeElement.style.visibility = 'hidden';
  }

  getMonthFromNumber(monthNum: number) {
    if(monthNum >= 0 && monthNum <= 11) {
      return this.monthList[monthNum];
    }
    return "";
  }

  getLastDateOfMonth_startDay() {
    this.lastDayOfCurrMonth = new Date(this.nextYear, this.nextMonth, 0).getDate();
    let nextYear = this.nextMonth == 11 ? this.nextYear + 1 : this.nextYear;
    let nextMonth = this.nextMonth == 11 ? 0 : this.nextMonth + 1;
    this.lastDayOfNextMonth = new Date(nextYear, nextMonth, 0).getDate();

    this.currentStartDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    this.nextStartDay = new Date(this.nextYear, this.nextMonth, 1).getDay();
  }

  getNextMonthYear() {
    this.nextYear = this.currentMonth == 11 ? this.currentYear + 1 : this.currentYear;
    this.nextMonth = this.currentMonth == 11 ? 0 : this.currentMonth + 1;
    this.getLastDateOfMonth_startDay();
  }

  getPreviousMonth() {
    this.currentYear = this.currentMonth == 0 ? this.currentYear - 1 : this.currentYear;
    this.currentMonth = this.currentMonth == 0 ? 11 : this.currentMonth - 1;
    this.getNextMonthYear();
  }

  getNextMonth() {
    this.currentYear = this.currentMonth == 11 ? this.currentYear + 1 : this.currentYear;
    this.currentMonth = this.currentMonth == 11 ? 0 : this.currentMonth + 1;
    this.getNextMonthYear();
  }

  toggleDatepicker() {
    if(this.datePicker.nativeElement.style.visibility == 'hidden') {
      this.datePicker.nativeElement.style.visibility = 'visible';
    } else {
      this.datePicker.nativeElement.style.visibility = 'hidden';
    }
  }

}
