import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Accor } from '../service/accor.model';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.css']
})
export class HeaderFormComponent {
  @ViewChild('sectionHeader') sectionHeader : any;
  @ViewChild('sectionDetails') sectionDetails : any;

  @Output() tellToParentAccor = new EventEmitter();

  createAccordian() {
    // console.log('accordian trigger')
    const newAcc = new Accor(this.sectionHeader.nativeElement.value,this.sectionDetails.nativeElement.value)
  // console.log(newAcc)    
    // console.log(newAcc)
    this.tellToParentAccor.emit(newAcc)
  }

}
