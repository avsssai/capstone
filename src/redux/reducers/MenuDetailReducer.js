import {
	GET_ONE_ITEM_STARTED,
	GET_ONE_ITEM_SUCCESS,
	GET_ONE_ITEM_FAILURE,
	UPDATE_ONE_ITEM_STARTED,
	UPDATE_ONE_ITEM_SUCCESS,
	UPDATE_ONE_ITEM_FAILURE,
	REMOVE_ONE_ITEM,
} from "../types";

const initialState = {
	status: "idle",
	error: null,
	data: {},
};

function MenuDetailReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ONE_ITEM_STARTED:
			return {
				...state,
				status: "pending",
			};
		case GET_ONE_ITEM_SUCCESS:
			return {
				...state,
				status: "success",
				data: action.payload.data,
			};
		case GET_ONE_ITEM_FAILURE:
			return {
				...state,
				status: "failure",
				error: action.payload.error,
			};
		case UPDATE_ONE_ITEM_STARTED:
			return {
				...state,
				status: "pending",
			};
		case UPDATE_ONE_ITEM_SUCCESS:
			return {
				...state,
				status: "success",
				data: action.payload.data,
			};
		case UPDATE_ONE_ITEM_FAILURE:
			return {
				...state,
				status: "failure",
				error: action.payload.error,
			};
		case REMOVE_ONE_ITEM:
			return initialState;
		default:
			return state;
	}
}

export default MenuDetailReducer;
