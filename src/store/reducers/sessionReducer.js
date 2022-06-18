import { TEST, FETCH_APPLICATION_LANGUAGE, SELECTED_LANGUAGE, LOGIN_SUCCESS, APP_UPDATE, MANAGE_CONNECTIONS, APP_SETTINGS, SECURITY_PRIVACY, USER_INFO, WALLET_INFO,IS_CONNECTED_WALLET, WALLET_ACCOUNT, IS_GET_WALLET_DATA } from "../actions/actionTypes";

/** Set default value to initial state */
const initialState = {
    test: null,
    fetchApplicationLanguage: null,
    selectedLanguage: null,
    isAuthenticated: false,
    appUpdate: true,
    manageConnections: { instagram: false, facebook: false, twitter: false, discord: false, metamask: false, phantom: false },
    appSettings: { notifications: false, shareNfts: false, locationServices: false, enableHints: false },
    securityPrivacy: { twoFactorAuthentication: false, antiPhishing: false, biometrics: false, stayLoggedIn: false },
    userInfo: null,
    walletInfo:null,
    isConnectedWallet:false,
    walletAccount:null,
    isGetWalletData:true,
}

/**
 * This function is used to update the state by pushing an action into the initial state
 * @param {object} state 
 * @param {object} action 
 * @returns 
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case TEST:
            return {
                ...state,
                test: action.data
            }
        case FETCH_APPLICATION_LANGUAGE:
            return {
                ...state,
                fetchApplicationLanguage: action.data,
            };
        case SELECTED_LANGUAGE:
            return {
                ...state,
                selectedLanguage: action.data,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: action.data,
            };
        case APP_UPDATE:
            return {
                ...state,
                appUpdate: action.data,
            };
        case MANAGE_CONNECTIONS:
            return {
                ...state,
                manageConnections: { ...state.manageConnections, ...action.data }
            };
        case APP_SETTINGS:
            return {
                ...state,
                appSettings: { ...state.appSettings, ...action.data }
            };
        case SECURITY_PRIVACY:
            return {
                ...state,
                securityPrivacy: { ...state.securityPrivacy, ...action.data }
            };
        case WALLET_INFO:
            return {
                ...state,
                walletInfo: action.data
            }
        case IS_CONNECTED_WALLET:
            return {
                ...state,
                isConnectedWallet: action.data
            }
        case WALLET_ACCOUNT:
            return {
                ...state,
                walletAccount: action.data
            }
          case IS_GET_WALLET_DATA:
            return {
                ...state,
                isGetWalletData: action.data
            }

        default:
            return state
    }
}