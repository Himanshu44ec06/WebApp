import { Component } from '@angular/core';
import { GlobalVariable } from '../../global';


@Component({
// tslint:disable-next-line: component-selector
    selector : 'create-user',
    templateUrl : './createUser.component.html'
})
export class  CreateUserComponent  {

    language = GlobalVariable.LanguageResourse;
    

} 