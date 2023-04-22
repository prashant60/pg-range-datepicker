import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-picker-box',
  templateUrl: './picker-box.component.html',
  styleUrls: ['./picker-box.component.scss']
})
export class PickerBoxComponent implements OnInit {
  private monthList: string[] = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  weekdays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  @Input() showPreviousMonthBtn: boolean = false;
  @Input() showNextMonthBtn: boolean = false;
  @Input() currentMonth: number = new Date().getMonth();
  @Input() currentYear: number = new Date().getFullYear();
  @Input() lastDayOfMonth: number = 0;
  @Input() startDay: number = 0;
  @Input() selectedDate: Date | undefined | null;
  @Input() selectedDateEnd: Date | undefined | null;
  @Input() disablePastDates: boolean = false;
  @Input() disabledDates: Date[] = [];
  @Input() minDate: Date | undefined;
  @Input() maxDate: Date | undefined;
  @Input() allowRange: boolean = false;

  @Output() fetchPreviousMonth = new EventEmitter<any>();
  @Output() fetchNextMonth = new EventEmitter<any>();
  @Output() selectedDateChange = new EventEmitter<any>();
  @Output() selectedDateEndChange = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }
  
  isTodayDate(date: number) {
    let todayDate = new Date();
    return (todayDate.getFullYear() == this.currentYear && todayDate.getMonth() == this.currentMonth && todayDate.getDate() == date);
  }

  isSelectedDate(date: number) {
    if(!this.selectedDate) return false;
    return (this.selectedDate.getFullYear() == this.currentYear && this.selectedDate.getMonth() == this.currentMonth && this.selectedDate.getDate() == date);
  }

  isSelectedDateEnd(date: number) {
    if(!this.selectedDateEnd) return false;
    return (this.selectedDateEnd.getFullYear() == this.currentYear && this.selectedDateEnd.getMonth() == this.currentMonth && this.selectedDateEnd.getDate() == date);
  }
  
  isInRange(date: number) {
    if(this.selectedDate && this.selectedDateEnd) {
      let currentDate = new Date(this.currentYear, this.currentMonth, date);
      return (this.selectedDate <= currentDate && currentDate <= this.selectedDateEnd);
    }
    return false;
  }

  currentDate(date: number) {
    return new Date(this.currentYear, this.currentMonth, date);
  }

  isPastDate(date: number) {
    return new Date(this.currentYear, this.currentMonth, date) < new Date(new Date().setHours(0, 0, 0, 0));
  }

  disableDate(date: number) {
    if((this.disablePastDates && this.isPastDate(date)) || (this.minDate && this.currentDate(date) < this.minDate) || (this.maxDate && this.currentDate(date) > this.maxDate)) {
      return true;
    }
    let disableDate = false;
    if(this.disabledDates && this.disabledDates.length > 0) {
      this.disabledDates.forEach((e: Date) => {
        e = new Date(new Date(e).setHours(0, 0, 0, 0))
        if(e.toString() == this.currentDate(date).toString()) {
          disableDate = true;
        }
      })
    }
    return disableDate;
  }

  onDateSelect(date: number) {
    if(!this.disableDate(date)) {
      if(!this.allowRange || (!this.selectedDate && !this.selectedDateEnd) || (this.selectedDate && this.selectedDateEnd) || (this.selectedDate && new Date(this.currentYear, this.currentMonth, date) < this.selectedDate)) {
        this.selectedDateEndChange.emit(null);
        this.selectedDateChange.emit(new Date(this.currentYear, this.currentMonth, date));
      } else {
        this.selectedDateEndChange.emit(new Date(this.currentYear, this.currentMonth, date));
      }
    }
  }

  getMonthFromNumber(monthNum: number) {
    if(monthNum >= 0 && monthNum <= 11) {
      return this.monthList[monthNum];
    }
    return "";
  }

  getPreviousMonth() {
    this.fetchPreviousMonth.emit();
  }

  getNextMonth() {
    this.fetchNextMonth.emit();
  }
}
