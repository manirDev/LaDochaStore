import { ThemeActionTypes } from "../constants/actions-types"

export const setLightMode = () => {
    return {
        type : ThemeActionTypes.LIGHT,
        payload : false,
    };
};

export const setDarkMode = () => {
    return {
        type : ThemeActionTypes.DARK,
        payload : true,
    };
};

export const setToggle = () => {
    return {
        type : ThemeActionTypes.TOGGLE,
    };
};

