import { combineReducers } from "redux";
import profileReducer from "./Profile/reducer";
import settingReducer from "./SettingSite/reducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  setting: settingReducer,
});

export default rootReducer;
