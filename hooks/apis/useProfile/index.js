import axios from "axios";
import { checkCookie, getCookie, setCookie } from "hooks/useCookie";
import useFetcher from "hooks/useFetcher";
import { baseApi } from "hooks/useFetcher/config";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "reduxStates/Profile/actions";
import { endLoading, startLoading } from "reduxStates/SettingSite/actions";

function useProfile() {
  const { post } = useFetcher();
  const dispatch = useDispatch();
  const { userData, authentication } = useSelector((state) => state.profile);
  const [isLoading, setIsLoading] = useState(false);
  const { locale } = useRouter();

  const handelGetProfile = async (token = null, showSpinner = true) => {
    if (!checkCookie("token")) return;

    try {
      setIsLoading(true);
      if (showSpinner) dispatch(startLoading());

      const { status, data } = await axios.get(baseApi + "profile", {
        headers: {
          authorization:
            "Bearer " +
            (typeof token?.token != "undefined"
              ? token?.token
              : getCookie("token")),
        },
        params: {
          lang: locale,
        },
      });

      if (status === 200) {
        dispatch(setUserData(data?.data));
        if (showSpinner) dispatch(endLoading());
        setIsLoading(false);
      }
    } catch (err) {
      if (showSpinner) dispatch(endLoading());
      setIsLoading(false);
    }
  };

  const handelLogout = () => {
    post(
      "auth/user-logout",
      {},
      () => {
        dispatch(setUserData(null));
        setCookie("token", "", -1);
      },
      { showToast: false }
    );
  };

  return {
    userData,
    handelGetProfile,
    isLoading,
    handelLogout,
    authentication,
  };
}

export default useProfile;
