import {
  OPEN_MODAL_AVATARS,
  SET_DATA_AUTHENTICATION,
  SET_USER_DATA,
} from "./types";

const initialState = {
  openModalAvatars: false,
  userData: null,
  authentication: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_AVATARS: {
      return {
        ...state,
        openModalAvatars: action.payload,
      };
    }

    case SET_USER_DATA: {
      return {
        ...state,
        userData: action.payload,
      };
    }

    case SET_DATA_AUTHENTICATION: {
      return {
        ...state,
        authentication: action.payload,
      };
    }

    default:
      return state;
  }
};

export default profileReducer;
