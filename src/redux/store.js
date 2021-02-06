import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import firebase from "../firebase/firebase";

import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const middlewares = [logger];

const rrfConfig = {
  userProfile: "users",
  // useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  // attachAuthIsReady: true,
};

// const store = createStore(rootReducer, applyMiddleware(...middlewares));

const store = createStore(
  rootReducer,
  composeEnhancers(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase),
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

export const persistor = persistStore(store);

export default store;
