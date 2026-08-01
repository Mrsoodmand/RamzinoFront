import { Error, Success } from "hooks/Toast";
import handelTextError from "./handelTextError";

const handelErrors = (res, type = "get", validationErrors = true, onUnauthorized = null) => {
  switch (res?.status) {
    case 200:
      if (type === "delete" || type === "post") {
        let msg = "";
        if (Array.isArray(res?.data?.msg)) {
          msg = res?.data?.msg?.join("\n");
        } else {
          msg = res?.data?.msg;
        }
        Success(msg);
      }

      return res;

    case 201:
      if (type === "delete" || type === "post") {
        let msg = "";
        if (Array.isArray(res?.data?.msg)) {
          msg = res?.data?.msg?.join("\n");
        } else {
          msg = res?.data?.msg;
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
        if (Array.isArray(res?.data?.msg)) {
          handelTextError(res?.data?.msg);
        } else if (typeof res?.data?.msg === "string") {
          Error(res?.data?.msg);
        }

      return res;
    case 400:
      // handelResetProfile();

      if (validationErrors)
        if (Array.isArray(res?.data?.msg)) {
          handelTextError(res?.data?.msg);
        } else if (typeof res?.data?.msg === "string") {
          Error(res?.data?.msg);
        }

      return res;
    default:
      break;
  }
};

export default handelErrors;
