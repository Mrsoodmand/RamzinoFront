import { Error } from "hooks/Toast";

const handelTextError = (errors, isReturn = false) => {
  let textArray = [];

  const values = errors;

  values.forEach((error, index) => {
    if (typeof error === "object") {
      textArray[index] = "";
      error?.forEach((textError, i) => {
        textArray[index] += textError + (i < error?.length - 1 ? "و" : "");
      });
    } else {
      textArray[index] = error;
    }
  });

  let textError = "";

  textArray.forEach((e, i) => {
    textError += i + 1 + " - " + e + " \n";
  });

  if (!isReturn) Error(textError);
  if (isReturn) return textError;
};

export default handelTextError;
