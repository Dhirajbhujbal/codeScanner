import { ActionConstant } from '../Actions/action.constant';


const initialState = {
    getProductList: {}
}

export const AppMainReducer = (state = initialState, action) => {
    const clonedState = {...state};

    switch(action.type) {
        
        case ActionConstant.GET_PRODUCT_LIST:
            clonedState.getProductList = action.payload;
            return clonedState;
        
        default:
            return clonedState;

    }

}