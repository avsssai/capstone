import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export function useGetData(action, item, ...actionProps) {
	const dispatch = useDispatch();
	const state = useSelector((state) => state[item]);
	const { status, data, error } = state;
	useEffect(() => {
		if (status === "idle") {
			dispatch(action(actionProps));
		}
	}, [status, action, dispatch, actionProps]);
	return [status, data, error];
}
