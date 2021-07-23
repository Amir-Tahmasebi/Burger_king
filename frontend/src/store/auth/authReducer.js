import { actionTypes } from "./authAction";

const initState = {
  status: null,
  message: null,
  token: null,
  loading: false,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
      const registerSuccessPayload = action.payload;
      return {
        ...state,
        status: registerSuccessPayload.status,
        message: registerSuccessPayload.message,
        token: null,
        loading: false,
      };
    case actionTypes.REGISTER_REQUEST:
      return {
        ...state,
        token: null,
        loading: true,
      };
    case actionTypes.REGISTER_ERROR:
      const registerErrorPayload = action.payload;
      return {
        ...state,
        status: registerErrorPayload.status,
        message: registerErrorPayload.message,
        token: null,
        loading: false,
      };
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        token: null,
        loading: true,
        message : null,
        status :null
        
      };

    case actionTypes.LOGIN_SUCCESS:
      const loginSuccessPayload = action.payload;
      return {
        ...state,
        status: loginSuccessPayload.status,
        token: loginSuccessPayload.token,
        message: loginSuccessPayload.message,
        loading: false,
      };

    case actionTypes.LOGIN_ERROR:
      const loginErrorPayload = action.payload;
      return {
        ...state,
        message: loginErrorPayload.message,
        status: loginErrorPayload.status,
        token: null,
        loading: false,
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        token: null,
        loading: false,
        status: null,
        message: "شما از حساب کاربری تان خارج شدید",
      };

    case actionTypes.INIT_SUCCESS:
      const initSuccessPayload = action.payload;
      return {
        ...state,
        token: initSuccessPayload.token,
        message: initSuccessPayload.message,
        status: initSuccessPayload.status,
        loading: false,
      };
      case actionTypes.INIT_ERROR:
        const initErrorPayload = action.payload;
        return {
          ...state,
          token: null,
          message: initErrorPayload.message,
          status: initErrorPayload.status,
          loading: false,
        };
    default:
      // throw Error(`action type not allowed : ${action.type}`);
      return state;
  }
}

export default reducer;
