import {
	ALL_PRODUCTS_REQUEST,
	ALL_PRODUCTS_SUCCESS,
	ALL_PRODUCTS_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	CLEAR_ERRORS,
	ADD_TO_CART
} from "../constants/cartConstants";

let defaultState = {
	selectedItems: { items: [], restaurantName: "" }
};


let cartReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			let newState = { ...state };


			if (action.payload.checkboxValue) {
				console.log("ADD TO CART");

				newState.selectedItems = {
					items: [...newState.selectedItems.items, action.payload.item],
					restaurantName: action.payload.restName
				};

				
			} else {
				console.log("REMOVE FROM CART");
				console.log(newState)
				newState.selectedItems = {
					items: [
						...newState.selectedItems.items.filter(
							(item) => item.title !== action.payload.item.title
						)
					],
					restaurantName: action.payload.restaurantName
				};
			}
			
			return newState
			
		default:
			return state;
	}
};

export default cartReducer