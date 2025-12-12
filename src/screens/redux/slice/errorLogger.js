import { isRejectedWithValue } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { saveAlertMessage } from "./alertMessage";

export const rtkQueryErrorLogger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // console.log("action", action);
    if (isRejectedWithValue(action)) {
      console.log(action);

      if (action?.payload?.status == 400) {
        // alert(action?.payload?.data?.message);
        dispatch(saveAlertMessage(action?.payload?.data?.message));
      } else if (action?.payload?.status == 401) {
        // dispatch(saveAlertMessage(action?.payload?.data?.message));
        dispatch(
          saveAlertMessage("You are already logged in on a different device")
        );
        // UNAUTHENTICATED ACCESS
        setTimeout(() => {
          localStorage.clear();
          window.location.reload();
        }, 1500);
      } else if (action?.payload?.status == 500) {
        // alert("HTTP ERROR 500");
        dispatch(saveAlertMessage("HTTP ERROR 500"));
      } else if (action?.payload?.data?.message) {
        // alert(action?.payload?.data?.message);
        dispatch(saveAlertMessage(action?.payload?.data?.message));
      } else {
        // alert("SERVER ERROR");
        dispatch(saveAlertMessage("NETWORK ERROR"));
      }
      // console.warn("We got a rejected action!");
      // toast.warn({ title: "Async error!", message: action.error.data.message });
    }

    return next(action);
  };
