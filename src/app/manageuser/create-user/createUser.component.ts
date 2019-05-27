import { Component, HostListener, Output, EventEmitter, OnInit, Input, OnChanges } from '@angular/core';
import { GlobalVariable } from '../../global';
import  { Constant}  from '../../constant';
import  { UserModel }   from '../model/UserModel';




@Component({
// tslint:disable-next-line: component-selector
    selector : 'create-user',
    templateUrl : './createUser.component.html'
})
export class  CreateUserComponent  implements OnInit,OnChanges  {

    private readonly language = GlobalVariable.LanguageResourse;
    disabledSubmitButton = true;
   private readonly  dropdownList = Constant.RolesArray.slice(0);
    selectedItems = [];
    @Input('currentUser') currentUser: UserModel;
    

    dropdownSettings = {
        singleSelection: false,
        idField: 'Id',
        textField: 'Role',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };

// tslint:disable-next-line: no-output-rename
    @Output('cancel') cancelEmitter = new EventEmitter();
    @Output('childsubmit') submitEmitter = new EventEmitter<UserModel>();

      ngOnInit(){
          
      }

      ngOnChanges(){
          if(this.currentUser) {
              console.log(this.currentUser);
          }
      }

    cancel(): void {
        this.cancelEmitter.next();
    }

    onSubmit(createform) : void  {

        if(createform  &&  createform.valid) {
            console.log(this.currentUser)
           this.submitEmitter.emit(this.currentUser);
        }
    }
         

}
