import { GET_ALL_ITEMS_FAILURE, GET_ALL_ITEMS_STARTED, GET_ALL_ITEMS_SUCCESS } from "../types";

export const getAllItems = () => {
	return async (dispatch) => {
		dispatch(getItemsStarted());

		try {
			const res = await fetch("http://localhost:5000/data");
			const json = await res.json();
			dispatch(getItemsSuccess(json));
		} catch (error) {
			dispatch(getItemsFailure(error));
		}
	};
};

function getItemsStarted() {
	return {
		type: GET_ALL_ITEMS_STARTED,
	};
}

function getItemsSuccess(items) {
	return {
		type: GET_ALL_ITEMS_SUCCESS,
		payload: items,
	};
}

function getItemsFailure(error) {
	return {
		type: GET_ALL_ITEMS_FAILURE,
		payload: error.message,
	};
}
