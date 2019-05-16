import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UserModel } from '../model/UserModel';


@Component({
// tslint:disable-next-line: component-selector
     selector: 'user-list',
     templateUrl: './userList.component.html'
})

export class  UserListComponent implements OnChanges  {


  @Input()  FilterBy: string;
  @Input() UserList: UserModel[];
  filterUserList: UserModel[];



  ngOnChanges(): void {
      if (this.UserList) {
      console.log(this.FilterBy);
        this.filterby();
    }
  }

  filterby() {
    const value = this.FilterBy;
    if (value.length > 2) {
        this.filterUserList = this.UserList.filter( (f) => {
            return f.Username.toLowerCase().indexOf(value.toLowerCase()) > -1;
        });
    } else {
        this.filterUserList =  this.UserList.slice(0);
    }
  }


}
