import axios from "axios";
import { setAlert } from "./alert";

import { GET_PROFILE, PROFILE_ERROR } from "./types";

//Get the current user's profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

//Create or update Profile
export const createProfile =
  (formData, history, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post("/api/profile", formData, config);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      dispatch(
        setAlert(
          edit
            ? "Profile Successfully Updated"
            : "Profile Successfully Created",
          "success"
        )
      );
      // If not editing
      if (!edit) {
        history.push("/dashboard");
      }
    } catch (e) {
      const errors = e.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: e.response.statusText, status: e.response.status },
      });
    }
  };
