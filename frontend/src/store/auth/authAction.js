import HttpClient from "../../services/HttpClient";
const httpClient = new HttpClient();

export const actionTypes = {
  REGISTER_REQUEST: "REGISTER_REQUEST",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_ERROR: "REGISTER_ERROR",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGOUT: "LOGOUT",
  INIT_SUCCESS: "INIT_SUCCESS",
  INIT_ERROR: "INIT_ERROR",
};

export const registerRequest = () => ({ type: actionTypes.REGISTER_REQUEST });
export const registerSuccess = (status, message) => ({
  type: actionTypes.REGISTER_SUCCESS,
  payload: {
    message,
    status,
  },
});
export const registerError = (status, message) => ({
  type: actionTypes.REGISTER_ERROR,
  payload: {
    message,
    status,
  },
});

export const loginRequest = () => ({ type: actionTypes.LOGIN_REQUEST });
export const loginSuccess = (status, token, message) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: {
    status,
    token,
    message,
  },
});
export const loginError = (status, message) => ({
  type: actionTypes.LOGIN_ERROR,
  payload: {
    status,
    message,
  },
});
export const logout = () => {
  localStorage.removeItem("token");
  return { type: actionTypes.LOGOUT };
};

export const initSuccess = (status, message, token) => ({
  type: actionTypes.INIT_SUCCESS,
  payload: {
    status,
    message,
    token,
  },
});

export function userRegister(values) {
  return async function userRegisterThunk(dispatch) {
    try {
      const response = await httpClient.post("auth/register", values);
      const { status, message } = response.data;
      if (status === 1) {
        dispatch(registerSuccess(status, message));
      } else {
        dispatch(registerError(status, message));
      }
    } catch (error) {
      dispatch(registerError(0, 'سرور با مشکلی مواجه شده است'));
      console.dir(error);
    }
  };
}

export function userLogin(values) {
  return async function userLoginThunk(dispatch) {
    try {
      const response = await httpClient.post("auth/login", values);
      const { status, token, message } = response.data;
      if (status === 1) {
        localStorage.setItem("token", token);
        dispatch(loginSuccess(status, token, message));
      } else {
        dispatch(loginError(status, message));
      }
    } catch (error) {
      console.dir(error);
      dispatch(loginError(0, 'سرور با مشکلی مواجه شده است'));
    }
  };
}

export function fetchUserCurrentInfo(data = null) {
  return async function fetchUserCurrentInfoThunk(dispatch) {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await httpClient.post("init", data, {
          headers: {
            authorization: `bearer  ${token}`,
          },
        });
        const { status, message } = response.data;
        if (status === 1) {
          dispatch(initSuccess(status, message, token));
        } else {
          dispatch({ type: "initError", payload: response.data });
        }
      }
    } catch (error) {
      console.dir(error);
    }
  };
}
