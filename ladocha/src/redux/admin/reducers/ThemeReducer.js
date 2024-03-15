import { ThemeActionTypes } from "../constants/actions-types"

const initialState = {
    darkMode : false
}

export const themeReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ThemeActionTypes.LIGHT:
            return {...state, darkMode: payload};
        case ThemeActionTypes.DARK:
            return {...state, darkMode: payload};
        case ThemeActionTypes.TOGGLE:
            return{...state, darkMode: !state.darkMode}
        default:
            return state;
    }
}