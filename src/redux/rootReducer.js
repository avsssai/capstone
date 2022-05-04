import { combineReducers } from "redux";
import MenuDetailReducer from "./reducers/MenuDetailReducer";
import MenuReducer from "./reducers/MenuReducer";
import ReviewsReducer from "./reducers/ReviewsReducer";

const rootReducer = combineReducers({ menu: MenuReducer, reviews: ReviewsReducer, menuDetail: MenuDetailReducer });

export default rootReducer;
