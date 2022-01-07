import { ADD_TO_CART } from "../constants/cartConstants";

export const addToCart = (payload) => async (dispatch) => {
	try {
		console.log("dodaję akcję addToCart");
		await dispatch({ type: ADD_TO_CART, payload: payload });
	} catch (error) {
		console.log(error);
	}
};
