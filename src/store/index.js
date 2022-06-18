import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

/** Create Config for persistReducer  */
const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    timeout: null,
}

/** Assign persistConfig and rootReducer to persistReducer */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/** Create store with persistReducer using createStore function from redux */
export const store = createStore(persistedReducer, applyMiddleware(thunk));

/** Assign the created store to persistStore */
export const persistor = persistStore(store);