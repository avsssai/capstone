import { combineReducers } from "redux";
import MenuReducer from "./reducers/MenuReducer";
import ReviewsReducer from "./reducers/ReviewsReducer";

const rootReducer = combineReducers({ menu: MenuReducer, reviews: ReviewsReducer });

export default rootReducer;
