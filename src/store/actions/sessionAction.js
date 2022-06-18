import { IS_CONNECTED_WALLET, IS_GET_WALLET_DATA, LOGIN_SUCCESS,USER_INFO, WALLET_ACCOUNT, WALLET_INFO } from './actionTypes';
import api from '../../../api'
import { Platform, NativeModules } from 'react-native';

/** 
 * This action creator used for navigate to home screen when user phone number and password is valid 
 * @function
 * @param {self}
 * @returns dispatch
 */

export function login(self,userCredential) {
    return async dispatch => {      
        self.props.dispatch({ type: LOGIN_SUCCESS, data: true })
        self.props.navigation.navigate("MainView");   
        api.post("users/login", userCredential).then(async (response) => {
        if(response.status === "success") {
            self.props.dispatch({ type: LOGIN_SUCCESS, data: true })

            self.props.navigation.navigate("MainView");
            } else {

            }
        });
     }
}

/**
 * This action creator used for logout of the application  
 * @function
 * @param  {navigation} navigation 
 * @returns dispatch
 */
export function logout(self) {
    return async dispatch => {
        self.props.navigation.navigate("LoginScreen")
        self.props.dispatch({ type: LOGIN_SUCCESS, data: false })
    }
}

/**
 * This action creator used for register user details send to server
 * @function
 * @param {Object} self 
 * @param {Object} data
 * @returns dispatch
 */
export function register(self, userInfo) {
    return async dispatch => {
        console.log(JSON.stringify(userInfo))
        dispatch({ type: USER_INFO, data: userInfo })
        dispatch({ type: LOGIN_SUCCESS, data: true })
        self.props.navigation.navigate("MainView");

        // api.post("users/signup", data).then(async (response) => {
        //     if (response.status === "success") {

        //     } else {

        //     }
        // });
    }
}





export function getWalletData(account) {
    return async dispatch => {    
      api.get(`nft-by-address/${account}`).then(async (response) => { 
          console.log("***********getWalletData********************")
      let paramValue = [      
            {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/1.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},
            {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/2.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},
            {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/3.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},
            {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/6.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},
            {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/4.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},
            {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/5.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"}]
         let resultJson = {"mainnetJson":[ {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"2","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},{"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"3","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},{"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"5","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"},"timeLastUpdated":"2022-05-16T09:31:15.760Z"}],
        "polygonJson":[ {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"9","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},{"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"7","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},{"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"8","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"},"timeLastUpdated":"2022-05-16T09:31:15.760Z"}]}
        if(response.status === "success") {   
           //dispatch({type:WALLET_INFO,data:[ ...paramValue,...resultJson.mainnetJson, ...resultJson.polygonJson]}) 
           dispatch({type:WALLET_INFO,data:[...paramValue,...response.payload.mainnetJson, ...response.payload.polygonJson]})       
           //dispatch({type:WALLET_INFO,data:paramValue})
          // dispatch({type:WALLET_INFO,data:null})
           dispatch({type:WALLET_ACCOUNT,data:account})          
        }else{
            dispatch({type:IS_CONNECTED_WALLET,data:false}) 
            dispatch({type:WALLET_ACCOUNT,data:null})   
        }
      });      
    }
}


export function getWalletDataviaWallet(account) {
    return async dispatch => {    
      api.get(`nft-by-address/${account}`).then(async (response) => { 
          console.log("***********getWalletData********************")
      let paramValue = [      
            {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/1.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},
            {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/2.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},
            {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/3.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},
            {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/6.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},
            {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/4.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},
            {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/5.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"}]
         let resultJson = {"mainnetJson":[ {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"2","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},{"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"3","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},{"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"5","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"},"timeLastUpdated":"2022-05-16T09:31:15.760Z"}],
        "polygonJson":[ {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"9","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},{"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"7","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},{"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"8","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"},"timeLastUpdated":"2022-05-16T09:31:15.760Z"}]}
        if(response.status === "success") {   
           dispatch({type:WALLET_INFO,data:[...paramValue,...response.payload.mainnetJson, ...response.payload.polygonJson]})       
           dispatch({type:WALLET_ACCOUNT,data:account})
           dispatch({type:IS_GET_WALLET_DATA,data:true})
         }else{
            dispatch({type:IS_CONNECTED_WALLET,data:false}) 
            dispatch({type:WALLET_ACCOUNT,data:null}) 
            dispatch({type:IS_GET_WALLET_DATA,data:false})  
         }
      });      
    }
}