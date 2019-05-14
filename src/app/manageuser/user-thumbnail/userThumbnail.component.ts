import { Component, Input } from '@angular/core';
import { UserModel } from '../model/UserModel';

@Component({
    selector : '<pm-user></pm-user>',
    templateUrl : ''
})
export class UserThumbnailComponent {

    @Input() userModel: UserModel;
    constructor(){}

}