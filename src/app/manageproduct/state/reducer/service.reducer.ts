import { Service } from '../../model';
import  * as ManageServiceAction from '../actions/service.actions';


export function  ServiceReducer(state: Service[] = [], action: ManageServiceAction.ManageServiceAction) {

    switch(action.type) {

        case ManageServiceAction.ManageServiceActionTypes.AddServiceSuccess:
            return  [...state,action.payload];
        
        case  ManageServiceAction.ManageServiceActionTypes.LoadServiceSuccess:
            return  action.payload;
        
        case  ManageServiceAction.ManageServiceActionTypes.DeleteServiceSuccess:
            return  state.filter( f =>  f.Id !== action.payload.Id);
        
        case ManageServiceAction.ManageServiceActionTypes.UpdateServiceSuccess:
                const updateService = state.map(
                    item => action.payload.Id === item.Id ? action.payload : item);
                return [...updateService] 

        default :
        return state;
    }


}