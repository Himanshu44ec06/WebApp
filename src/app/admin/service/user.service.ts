import { Injectable } from '@angular/core';
import { UserModel } from '../model/UserModel';


@Injectable()
export class  UserService {

    getUser() {
        let userList : UserModel[] = [];
        for (let i = 0; i < 5; i++) {
            const newUser: UserModel = {
                Id :  i,
                Username : 'username' + i,
                Email : 'email'+i,
                Roles : [],
                Status : (i%2 ==0),
            }
             userList.push(newUser);

             
        const  eventEmitter  =  new EventEmitter(true);

        setTimeout(() => {
              eventEmitter.emit(userList);
         }, 100);

        return  eventEmitter;
        }
    }
}