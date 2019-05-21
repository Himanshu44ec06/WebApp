import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { GlobalVariable } from 'src/app/global';




@Component({
// tslint:disable-next-line: component-selector
     selector: 'user-list',
     templateUrl: './userList.component.html'
})

export class  UserListComponent implements OnChanges  {

  private readonly role = GlobalVariable.RolesKey;
  private readonly language  =  GlobalVariable.LanguageResourse;

  private readonly panelclass = {
      1 : 'primary-default',
      2 : 'panel-warning',
      3 : 'panel-danger'
  };

  private readonly  Roles = [
    {Id: 1, Role : this.role.ManageUser, Text : this.language.ManageUser },
    {Id: 2, Role : this.role.ManageVendor, Text: this.language.ManageVendor},
    {Id: 3, Role : this.role.VendorBooking, Text : this.language.ManageVendorBooking},
    {Id: 4, Role : this.role.ManageContent, Text : this.language.ManageContent},
    {Id: 5, Role : this.role.DashBoard, Text : this.language.DashBoard},
    {Id: 6, Role : this.role.EndUser, Text : this.language.EndUser}
  ];

  @Input()  FilterBy: string;
  @Input() UserList: UserModel[];

// tslint:disable-next-line: no-output-rename
  @Output('DeleteUser') deletUserEmitter = new EventEmitter();;
  filterUserList: UserModel[];

  ngOnChanges(): void {
      if (this.UserList) {
        this.filterby();
    }
  }

  setClass(user: UserModel): string {
    return this.panelclass[user.Status];
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

  checkRoleExist(roles, role): boolean {
    return  !!roles.find((f) => f.Role  === role.Role);
  }

  emitDeleteUser(user: UserModel) {
         this.deletUserEmitter.emit(user.Id.toString());
  }

}

