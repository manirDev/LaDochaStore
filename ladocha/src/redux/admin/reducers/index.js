import { combineReducers } from "redux";
import { themeReducer } from "./ThemeReducer";


const reducers = combineReducers({
    adminDarkMode : themeReducer
});

export default reducers;