import * as ManageServiceAction  from '../actions/service.actions';
import { Service } from '../../model';


export  function  CurrentServiceReducer(state: Service = null,action: ManageServiceAction.ManageServiceAction) {

    switch(action.type) {

        case ManageServiceAction.ManageServiceActionTypes.ClearCurrentService:
            return  null;

        case  ManageServiceAction.ManageServiceActionTypes.InitalizeService:
            return  new  Service();
        
        case  ManageServiceAction.ManageServiceActionTypes.SetCurrentService:
            return  action.payload;

        default : 
         return state;
    }
}

