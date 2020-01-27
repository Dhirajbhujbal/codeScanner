export class HttpBase {

    async httpGetApiReuest (endPoint) {
        return fetch(endPoint).then( (response) => {
            return response.json();
        }).then((response) => {
            return response;
        }).catch((error) => {
            throw error;
        })
    }

}