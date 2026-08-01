import axios from "axios";
import { useDispatch } from "react-redux";
import { endLoading, startLoading } from "reduxStates/SettingSite/actions";
import handelErrors from "./handelErrors";
import { baseApi } from "./config";
import { handelAddAnimations, handelLazyImage } from "hooks/useScroll";
import { getCookie, setCookie } from "hooks/useCookie";
import { setUserData } from "reduxStates/Profile/actions";
import { useRouter } from "next/router";

function useFetcher(showSpinner = true) {
  const dispatch = useDispatch();
  const { locale } = useRouter();

  const handelResetProfile = () => {
    setCookie("token", "", -1);
    dispatch(setUserData(null));
  };

  const headersReq = {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      authorization: "Bearer " + getCookie("token"),
      HEADER_X_FORWARDED_ALL:
        typeof window != "undefined" && localStorage?.getItem("ip"),
    },
  };

  const headerUploadFile = {
    headers: {
      Accept: "application/json",
      "Content-type": "multipart/form-data",
      authorization: "Bearer " + getCookie("token"),
      HEADER_X_FORWARDED_ALL:
        typeof window != "undefined" && localStorage?.getItem("ip"),
    },
  };

  let spinner = {
    start: () => {
      dispatch(startLoading());
    },
    end: () => {
      dispatch(endLoading());
    },
  };

  const get = async (url, action = () => {}, params = {}) => {
    try {
      if (showSpinner) spinner.start();
      const res = await axios.get(baseApi + url, {
        ...headersReq,
        params: { ...params, lang: locale },
      });

      const lastRes = handelErrors(res, "get", true, handelResetProfile);

      if (res.status === 200 || res.status === 201) {
        action(res);
      }

      setTimeout(() => {
        handelAddAnimations();
        handelLazyImage();
      }, 20);
      if (showSpinner) spinner.end();
      return lastRes?.data;
    } catch (err) {
      const errors = handelErrors(err.response, "get", true, handelResetProfile);
      setTimeout(() => {
        handelAddAnimations();
        handelLazyImage();
      }, 20);
      if (showSpinner) spinner.end();
      return errors;
    }
  };

  const post = async (
    url,
    body = {},
    action = () => {},
    config = { showToast: true, showSpinner: true, validationErrors: true }
  ) => {
    try {
      if (showSpinner) spinner.start();
      const res = await axios.post(baseApi + url, body, {
        ...headersReq,
        params: { lang: locale },
      });

      const lastRes = handelErrors(
        res,
        config?.showToast ? "post" : "get",
        config?.validationErrors,
        handelResetProfile
      );

      if (res.status === 200 || res.status === 201) {
        action(res);
      }

      if (showSpinner) spinner.end();
      return lastRes?.data;
    } catch (err) {
      const errors = handelErrors(
        err.response,
        config?.showToast ? "post" : "get",
        config?.validationErrors,
        handelResetProfile
      );

      if (showSpinner) spinner.end();
      return errors;
    }
  };

  const upload = async (
    url,
    body = {},
    action = () => {},
    config = { showToast: true }
  ) => {
    try {
      if (showSpinner) spinner.start();

      const formData = new FormData();

      Object.entries(body).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((file) => {
            formData.append(key, file);
          });
        } else {
          formData.append(key, value);
        }
      });

      const res = await axios.post(baseApi + url, formData, {
        ...headerUploadFile,
        params: { lang: locale },
      });

      const lastRes = handelErrors(
        res,
        config?.showToast ? "post" : "get",
        true,
        handelResetProfile
      );

      if (res.status === 200 || res.status === 201) {
        action(res);
      }

      if (showSpinner) spinner.end();
      return lastRes?.data;
    } catch (err) {
      const errors = handelErrors(err.response, "get", true, handelResetProfile);

      if (showSpinner) spinner.end();
      return errors;
    }
  };

  return {
    get,
    post,
    upload,
  };
}

export default useFetcher;
