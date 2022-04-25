import { GET_ALL_ITEMS_FAILURE, GET_ALL_ITEMS_STARTED, GET_ALL_ITEMS_SUCCESS } from "../types";

const initialState = {
	status: "idle",
	error: null,
	data: [],
};

function MenuReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_ITEMS_STARTED:
			return {
				...state,
				status: "pending",
			};
		case GET_ALL_ITEMS_SUCCESS:
			return {
				...state,
				status: "success",
				data: action.payload,
			};
		case GET_ALL_ITEMS_FAILURE:
			return {
				...state,
				status: "failure",
				error: action.payload,
			};

		default:
			return state;
	}
}

export default MenuReducer;
