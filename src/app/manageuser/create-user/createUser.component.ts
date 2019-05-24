import { Component, HostListener, Output, EventEmitter, OnInit } from '@angular/core';
import { GlobalVariable } from '../../global';
import  { Constant}  from '../../constant';
import  { UserModel }   from '../model/UserModel';



@Component({
// tslint:disable-next-line: component-selector
    selector : 'create-user',
    templateUrl : './createUser.component.html'
})
export class  CreateUserComponent  implements OnInit  {

    private readonly language = GlobalVariable.LanguageResourse;
    disabledSubmitButton = true;
   private readonly  dropdownList = Constant.RolesArray.slice(0);
    selectedItems = [];

    

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

      constructor() {
          
      }

     


    cancel(): void {
        this.cancelEmitter.next();
    }

    onSubmit(createform) : void  {

        if(createform  &&  createform.valid) {
            
           let  userModel: UserModel = {
               Id:  0,
               password : '',
               Status : 0,
               Username :  createform.form.value.Username,
               Email  :  createform.form.value.Email,
               Roles : createform.form.value.selectedItems
           }
           console.log('Create Clicked');
           this.submitEmitter.emit(userModel);

        }
    }
         

}
