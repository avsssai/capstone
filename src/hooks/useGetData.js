import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSelectedItem } from "../redux/actions/menuDetailActions";

export function useGetData(action, item) {
	const dispatch = useDispatch();
	const state = useSelector((state) => state[item]);
	const { status, data, error } = state;
	useEffect(() => {
		if (status === "idle") {
			dispatch(action());
		}
	}, [status, action, dispatch]);
	return [status, data, error];
}
