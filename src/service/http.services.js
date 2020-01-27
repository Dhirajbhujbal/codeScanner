import { HttpBase } from './http.base.services';

export class HttpSerivces extends HttpBase {

    constructor() {
        super();
    }


    async getProductListDataFromApi() {
        const endpoint= 'https://vendekin.in/vendekin_aws/react_php_api_calls/json_data/product_list.php?qrcode=';
        return this.httpGetApiReuest(endpoint);
    } 

}