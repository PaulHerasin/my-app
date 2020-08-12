import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { works } from "./portfolioReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  works: works,
});
