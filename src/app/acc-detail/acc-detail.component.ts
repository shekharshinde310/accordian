import { Component, Input } from '@angular/core';
import { Accor } from '../service/accor.model';


@Component({
  selector: 'app-acc-detail',
  templateUrl: './acc-detail.component.html',
  styleUrls: ['./acc-detail.component.css']
})
export class AccDetailComponent {
  @Input() accor :any;
  @Input() set newAccSetter(catchedaccData : any){
    // console.log('new catchData',catchedaccData);
    if(catchedaccData){
      this.accorList.push(catchedaccData)
    }
  };
  accorList =[
    new Accor('Section 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    new Accor('Section 2', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamrem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta suntexplicabo. Nemo enimipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni doloreseos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.'),
    new Accor('Section 3', ' At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatumdeleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate noprovident, similique sunt in culpaqui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis estet expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quominus.'),
  ]
}
