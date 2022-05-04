import axios from "axios";
import {
	GET_ONE_ITEM_FAILURE,
	GET_ONE_ITEM_STARTED,
	GET_ONE_ITEM_SUCCESS,
	REMOVE_ONE_ITEM,
	UPDATE_ONE_ITEM_FAILURE,
	UPDATE_ONE_ITEM_STARTED,
	UPDATE_ONE_ITEM_SUCCESS,
} from "../types";

export const submitReview = (item, review, id) => {
	const datedReview = {
		...review,
		date: Date.now(),
	};
	const req = {
		...item,
		reviews: [...item.reviews, datedReview],
	};
	// console.log(item);
	return async (dispatch) => {
		dispatch(updateStarted());
		console.log(req);
		try {
			const res = await axios.put(`http://localhost:5000/data/${id}`, req);
			// const json = await axios.get("http://localhost:5000/data");
			dispatch(getItemAfterUpdateSuccess(res));
		} catch (error) {
			dispatch(updateItemsFailure(error));
		}
	};
};

export function getSingleMenuItemById(id) {
	return async (dispatch) => {
		dispatch(getSingleItemStarted());
		try {
			const res = await axios.get(`http://localhost:5000/data/${id}`);
			dispatch(getSingleItemSuccess(res));
		} catch (error) {
			dispatch(getSinlgeItemFailed(error));
		}
	};
}

function getSingleItemStarted() {
	return {
		type: GET_ONE_ITEM_STARTED,
	};
}

export function getSingleItemSuccess(res) {
	return {
		type: GET_ONE_ITEM_SUCCESS,
		payload: res,
	};
}

function getSinlgeItemFailed(error) {
	return {
		type: GET_ONE_ITEM_FAILURE,
		payload: error,
	};
}

export function removeSelectedItem() {
	return {
		type: REMOVE_ONE_ITEM,
	};
}

function updateStarted() {
	return {
		type: UPDATE_ONE_ITEM_STARTED,
	};
}
function getItemAfterUpdateSuccess(res) {
	return {
		type: UPDATE_ONE_ITEM_SUCCESS,
		payload: res,
	};
}

function updateItemsFailure(error) {
	return {
		type: UPDATE_ONE_ITEM_FAILURE,
		payload: error.message,
	};
}
