import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.css']
})
export class HeaderFormComponent {
  @Output() dataEvent = new EventEmitter;
  value : string | undefined;
  value1 : string | undefined;
  @ViewChild('sectionHeader') sectionHeaderData: ElementRef | any;
  @ViewChild('sectionDetails') sectionDetailsData: ElementRef | any;

  createAccordian() {
    // console.log('accordian trigger')
    const newAcc = [this.sectionHeaderData.nativeElement.value, this.sectionDetailsData.nativeElement.value];
    // console.log(newAcc)
    this.dataEvent.emit(newAcc);
  }

}
