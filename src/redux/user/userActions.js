import UserActionTypes from "./userTypes";

export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

export const addPlan = (cartItems) => async (dispatch, getState, {getFirestore}) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;

  dispatch({type: UserActionTypes.ADD_PLAN_START});
  try {
    const user = firestore.collection("users").doc(userId).get();

    const userCurrentSessions = user.sessions;

    console.log(userCurrentSessions);

    const plan = {
      sessions: cartItems.sessions
    } 

    // firestore.collection("user").update({
    //   sessions: plan
    // })

  } catch(err){
    dispatch({type: UserActionTypes.ADD_PLAN_FAIL, payload: err})
  }


}