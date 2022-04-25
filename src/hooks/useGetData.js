import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export function useGetData(action) {
	const dispatch = useDispatch();
	const menuState = useSelector((state) => state.menu);
	const { status, data, error } = menuState;
	useEffect(() => {
		if (status === "idle") {
			dispatch(action());
		}
	}, [status, action, dispatch]);
	return [status, data, error];
}
