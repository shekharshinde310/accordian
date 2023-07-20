import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-acc-item',
  templateUrl: './acc-item.component.html',
  styleUrls: ['./acc-item.component.css']
})
export class AccItemComponent {
  @Input() accor : any;
}
