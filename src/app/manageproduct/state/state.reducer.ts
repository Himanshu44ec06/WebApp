import { Category, SubCategory, Service }  from  '../model';

export  interface  ManageProductState {
    Category: Category [];
    CurrentCategory: Category | null ;

    SubCategory:  SubCategory [];
    CurrentSubCategory: SubCategory | null;

    Services: Service [];
    CurrentService: Service | null;

    error: string;

}

const  intialState : ManageProductState = {
    Category : [],
    CurrentCategory : null,
    
    SubCategory : [],
    CurrentSubCategory : null,

    Services : [],
    CurrentService : null,

    error : ''

}


export  function reducer(state = intialState, actions): ManageProductState {

    switch(actions.type){
        default :
        return state;
    }
}

