import { ActionConstant } from "./action.constant"
import { dataManagerObj } from '../../db/data.manager';
import { Alert } from "react-native";

export function getProductListAsync() {

    return async (dispatch) => {
        const response = await dataManagerObj.getProductData();
        dispatch(GetProductList(response))
    }

}

export const GetProductList = (data) => {
    return {
        type: ActionConstant.GET_PRODUCT_LIST,
        payload: data
    }
}