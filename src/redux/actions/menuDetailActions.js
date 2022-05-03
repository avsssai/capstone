import axios from "axios";
import { GET_ALL_ITEMS_FAILURE, GET_ALL_ITEMS_SUCCESS } from "../types";

export function submitReview(item, review, id) {
	const datedReview = {
		...review,
		date: Date.now(),
	};
	const req = {
		...item,
		[item.reviews]: datedReview,
	};

	return async (dispatch) => {
		console.log("rin");
		try {
			await axios.put(`http://localhost:5000/data/${id}`, { ...req });
			const json = await axios.get("http://localhost:5000/data");
			dispatch(getItemsSuccess(json));
		} catch (error) {
			dispatch(getItemsFailure(error));
		}
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
