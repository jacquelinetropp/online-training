import { combineReducers } from "redux";

import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import shopReducer from "./shop/shopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default persistReducer(persistConfig, rootReducer);
