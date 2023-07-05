import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-acc-detail',
  templateUrl: './acc-detail.component.html',
  styleUrls: ['./acc-detail.component.css']
})
export class AccDetailComponent {
  @Input() recieveData: any;
  @Input() recieveData2: any;
}
