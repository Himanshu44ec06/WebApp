import { Component, OnInit, AfterViewInit, Input, OnChanges, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { GlobalVariable } from 'src/app/global';
import { Constant } from '../../constant';



@Component({
// tslint:disable-next-line: component-selector
     selector: 'user-list',
     templateUrl: './userList.component.html'
})

export class  UserListComponent implements OnChanges  {

  private readonly language  =  GlobalVariable.LanguageResourse;
  private readonly  constant  = Constant;

  @Input()  FilterBy: string;
  @Input() UserList: UserModel[];

// tslint:disable-next-line: no-output-rename
  @Output('DeleteUser') deleteUserEmitter = new EventEmitter();
// tslint:disable-next-line: no-output-rename
  @Output('EditUser') editUserEmitter = new EventEmitter();

  filterUserList: UserModel[];

  ngOnChanges(): void {
      if (this.UserList) {
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


  emitDeleteUser(user: UserModel) {
    this.deleteUserEmitter.emit(user);
  }

  emitEditUser(user: UserModel) {
    this.editUserEmitter.emit(user);
  }

}

