import ShopActionTypes from "./shopTypes";

export const getPlans = () => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  dispatch({ type: ShopActionTypes.GET_PLANS_START });
  try {
    const items = await firestore.collection("plans");

    items.onSnapshot((snapshot) => {
      let plans = [];
      snapshot.docs.forEach((doc) => {
        plans.push({
          id: doc.id,
          price: doc.data().price,
          sessions: doc.data().sessions,
        });
      });
      console.log(plans);
      dispatch({ type: ShopActionTypes.GET_PLANS_SUCCESS, payload: plans });
    });
  } catch (err) {
    dispatch({ type: ShopActionTypes.GET_PLANS_FAIL, payload: err });
  }
};
