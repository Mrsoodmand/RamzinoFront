import {
  OPEN_MODAL_AVATARS,
  SET_DATA_AUTHENTICATION,
  SET_USER_DATA,
} from "./types";

export const changeStatusModalAvatars = (newStatus) => ({
  payload: newStatus,
  type: OPEN_MODAL_AVATARS,
});

export const setUserData = (userData) => ({
  payload: userData,
  type: SET_USER_DATA,
});

export const setDataAuthentication = (data) => ({
  payload: data,
  type: SET_DATA_AUTHENTICATION,
});
