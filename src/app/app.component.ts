import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info: any;
  info2: any;
  checked : boolean = true;

  listenFromChild(eve: any){
    this.info = eve[0];
    this.info2 = eve[1];
  }
}
