import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from "../helpers/constants";
import { store } from "../src/store/index";

/**
 * Handle promise reponse 
 * @param {Object} response 
 */ 
function parseResponse(response) {
    return response.json().then((json) => {
        if (!response.ok) {
            return Promise.reject(json);
        }
        return json;
    });
}

/** Handle promise reponse 
 * @param {Object} response 
 */
function parseYourInfoResponse(response) {
    return response.json().then((json) => {
        if (!response.ok) {
            return Promise.reject(json);
        }
        return json;
    });
}

export default {
    /**
     *  This is post request used for send data to the server 
     * @param {String} url  
     * @param {Object} data 
     */
    async post(url, data) {
        if (store.getState().loginReducer.isConnected) {
            const body = JSON.stringify(data);
            const bearer = 'Bearer ' + await AsyncStorage.getItem('token');
            const language = await AsyncStorage.getItem('language');
            return fetch(`${API}${url}`, {
                credentials: 'include',
                method: 'POST',
                headers: new Headers({ "Content-Type": "application/json", "Authorization": bearer, "Accept-Language": language }),
                body,
            }).then(parseResponse)
                .catch(function (error) {
                    var obj = {}
                    obj.data = null,
                        obj.error = "Looks like there was a problem"
                    return (obj)
                });
        } else {
            var obj = {}
            obj.status = "NC",
                obj.error = "No Internet Connection"
            return (obj)
        }
    },


    /**
     * Making multipart put request for combination of JSON data with Image  
     * @param {String} url 
     * @param {Object} data 
     */
    async putMultipart(url, data) {
        if (store.getState().loginReducer.isConnected) {
            const body = JSON.stringify(data);
            const bearer = 'Bearer ' + await AsyncStorage.getItem('token');
            const language = await AsyncStorage.getItem('language');
            return fetch(`${API}${url}`, {
                method: 'PUT',
                headers: new Headers({ "Content-Type": "multipart/form-data", "Authorization": bearer, "Accept-Language": language }),
                body: data,
            }).then(parseResponse)
                .catch(function (error) {
                    var obj = {}
                    obj.data = null,
                        obj.error = "Looks like there was a problem"
                    return (obj)
                });
        } else {
            var obj = {}
            obj.status = "NC",
                obj.error = "No Internet Connection"
            return (obj)
        }
    },




    /**
     * Making multipart request for combination of Json data with Image  
     * @param {String} url 
     * @param {Object} data 
     */
    async multipartPut(url, data) {
        if (store.getState().loginReducer.isConnected) {
            const body = JSON.stringify(data);
            const bearer = 'Bearer ' + await AsyncStorage.getItem('token');
            const language =  await AsyncStorage.getItem('language');
            return fetch(`${API}${url}`, {
                method: 'PUT',
                headers: new Headers({ "Content-Type": "multipart/form-data", "Authorization": bearer,"Accept-Language":language }),
                body: data,
            }).then(parseResponse)
                .catch(function (error) {
                    var obj = {}
                    obj.data = null,
                    obj.error = "Looks like there was a problem"
                    return (obj)
                });
        } else {
            var obj = {}
            obj.status = "NC",
            obj.error = "No Internet Connection"
            return (obj)
        }
    },

    /**
     * This is post method specifically used to submit the your information screen data   
     * @param {String} url 
     * @param {Object} data 
     */
    async postYourInfo(url, data) {
        if (store.getState().loginReducer.isConnected) {
            const body = JSON.stringify(data);
            const bearer = 'Bearer ' + await AsyncStorage.getItem('token');
            const language = await AsyncStorage.getItem('language');
            return fetch(`${API}${url}`, {
                credentials: 'include',
                method: 'POST',
                headers: new Headers({ "Content-Type": "application/json", "Authorization": bearer, "Accept-Language": language }),
                body,
            }).then(parseYourInfoResponse)
                .catch(function (error) {
                    var obj = {}
                    obj.data = null,
                        obj.error = "Looks like there was a problem"
                    return (obj)
                });

        } else {
            var obj = {}
            obj.status = "NC",
                obj.error = "No Internet Connection"
            return (obj)
        }
    },

    /**
     * Making trueface request for match pictures   
     * @param {String} url 
     * @param {Object} data 
     */
    async matchPost(url, data) {
        if (store.getState().loginReducer.isConnected) {
            const body = JSON.stringify(data);
            return fetch(`${API}${url}`, {
                method: 'POST',
                headers: new Headers({ "Content-Type": "application/json" }),
                body,
            }).then(parseResponse)
                .catch(function (error) {
                    var obj = {}
                    obj.data = null,
                        obj.error = "Looks like there was a problem"
                    return (obj)
                });
        } else {
            var obj = {}
            obj.status = "NC",
                obj.error = "No Internet Connection"
            return (obj)
        }
    },

    /**
     * Making multipart request for combination of Json data with Image  
     * @param {String} url 
     * @param {Object} data 
     */
    async multipart(url, data) {
        if (store.getState().loginReducer.isConnected) {
            const body = JSON.stringify(data);
            const bearer = 'Bearer ' + await AsyncStorage.getItem('token');
            const language = await AsyncStorage.getItem('language');
            return fetch(`${API}${url}`, {
                method: 'POST',
                headers: new Headers({ "Content-Type": "multipart/form-data", "Authorization": bearer, "Accept-Language": language }),
                body: data,
            }).then(parseResponse)
                .catch(function (error) {
                    var obj = {}
                    obj.data = null,
                        obj.error = "Looks like there was a problem"
                    return (obj)
                });
        } else {
            var obj = {}
            obj.status = "NC",
                obj.error = "No Internet Connection"
            return (obj)
        }
    },

    /**
     * Replaces all current representations of the target resource with the uploaded content.
     * @param {String} url 
     * @param {Object} data 
     */
    async put(url, data) {
        if (store.getState().loginReducer.isConnected) {
            const body = JSON.stringify(data);
            const bearer = 'Bearer ' + await AsyncStorage.getItem('token');
            const language = await AsyncStorage.getItem('language');
            return fetch(`${API}${url}`, {
                credentials: 'include',
                method: 'PUT',
                headers: new Headers({ "Content-Type": "application/json", "Authorization": bearer, "Accept-Language": language }),
                body,
            }).then(parseResponse)
                .catch(function (error) {
                    var obj = {}
                    obj.data = null,
                        obj.error = "Looks like there was a problem"
                    return (obj)
                });
        } else {
            var obj = {}
            obj.status = "NC",
                obj.error = "No Internet Connection"
            return (obj)
        }
    },

    /**
     * The GET method is used to retrieve information from the given server using a given url.
     * @param {String} url 
     * @param {Object} data data is optional 
     */
    async get(url) {   
        // console.log("**********get***********************"+`${API}${url}`)
           return fetch(`${API}${url}`, {
                method: 'GET',
                headers: new Headers({ "Content-Type": "application/json" }),
            }).then(parseResponse);
     },

    /**
     * Removes all current representations of the target resource given by a url.
     * @param {String} url 
     */
    async delete(url) {
        if (store.getState().loginReducer.isConnected) {
            const bearer = 'Bearer ' + await AsyncStorage.getItem('token');
            const language = await AsyncStorage.getItem('language');
            return fetch(`${API}${url}`, {
                credentials: 'include',
                method: 'DELETE',
                headers: new Headers({ "Content-Type": "application/json", "Authorization": bearer, "Accept-Language": language }),
            }).then(parseResponse);
        } else {
            var obj = {}
            obj.status = "NC",
                obj.error = "No Internet Connection"
            return (obj)
        }
    },
};