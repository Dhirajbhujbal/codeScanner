import { HttpSerivces } from '../service/http.services';
import { Alert } from 'react-native';


class AppDataManager {

    httpServicesObj = new HttpSerivces();
    

    async getProductData() {
        try {
            const productListData = await this.httpServicesObj.getProductListDataFromApi()
            return productListData;
        } catch(error) {
            Alert.alert('Something went wrong!');
        }
    }

}

export const dataManagerObj = new AppDataManager();
