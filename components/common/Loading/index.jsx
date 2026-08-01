import classes from "hooks/classes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoonLoader } from "react-spinners";
import { endLoading, startLoading } from "reduxStates/SettingSite/actions";
import { Router } from "next/router";

function Loading() {
  const setting = useSelector((state) => state.setting);
  const dispatch = useDispatch();

  useEffect(() => {
    const startLoadingFon = () => dispatch(startLoading());
    const endLoadingFon = () => dispatch(endLoading());

    Router.events.on("routeChangeStart", startLoadingFon);
    Router.events.on("routeChangeComplete", endLoadingFon);
    Router.events.on("routeChangeError", endLoadingFon);

    return () => {
      Router.events.off("routeChangeStart", startLoadingFon);
      Router.events.off("routeChangeComplete", endLoadingFon);
      Router.events.off("routeChangeError", endLoadingFon);
    };
  }, []);

  return (
    <div
      className={classes(
        "full-center fixed top-0 left-0 w-full h-full backdrop-blur-sm z-[100000] transition-medium bg-primary bg-opacity-75",
        setting.loading
          ? "pointer-events-auto opacity-1"
          : "pointer-events-none select-none opacity-0"
      )}
    >
      <MoonLoader color="#fff" />
    </div>
  );
}

export default Loading;
