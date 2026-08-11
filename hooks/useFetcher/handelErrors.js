import { Error, Success } from "hooks/Toast";
import handelTextError from "./handelTextError";

const handelErrors = (res, type = "get", validationErrors = true, onUnauthorized = null) => {
  switch (res?.status) {
    case 200:
      if (type === "delete" || type === "post") {
        let msg = "";
        if (Array.isArray(res?.data?.message)) {
          msg = res?.data?.message?.join("\n");
        } else {
          msg = res?.data?.message;
        }
        Success(msg);
      }

      return res;

    case 201:
      if (type === "delete" || type === "post") {
        let msg = "";
        if (Array.isArray(res?.data?.message)) {
          msg = res?.data?.message?.join("\n");
        } else {
          msg = res?.data?.message;
        }
        Success(msg);
      }

      return res;
    case 403:
      return res;
    case 401:
      if (typeof onUnauthorized === "function") onUnauthorized();
      return res;

    case 422:
      if (validationErrors)
        if (Array.isArray(res?.data?.errors)) {
          handelTextError(res?.data?.errors);
        } else if (typeof res?.data?.message === "string") {
          Error(res?.data?.message);
        }

      return res;
    case 400:
      // handelResetProfile();

      if (validationErrors)
        if (Array.isArray(res?.data?.errors)) {
          handelTextError(res?.data?.errors);
        } else if (typeof res?.data?.message === "string") {
          Error(res?.data?.message);
        }

      return res;
    default:
      break;
  }
};

export default handelErrors;
