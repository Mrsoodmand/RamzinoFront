import { toast } from "react-toastify";

const config = {
  position: "top-right",
  theme: "colored",
  icon: false,
  closeOnClick: true,
};

export const Error = (message) => toast.error(message, config);

export const Success = (message) => toast.success(message, config);

export const Warning = (message) => toast.warning(message, config);

export const Toast = (message, type = "success") =>
  toast[type](message, config);
