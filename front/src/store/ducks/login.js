export const Types = {
  REQUEST: 'login/REQUEST',
  SUCCESS: 'login/SUCCESS',
  LOGOUT: 'login/LOGOUT',
  ERROR: 'login/ERROR',
  PUT_MESSAGE: 'login/PUT_MESSAGE',
  GET_REQUEST_PERMISSION: 'login/GET_REQUEST_PERMISSION',
  GET_REQUEST_PERMISSION_SUCCESSS: 'login/GET_REQUEST_PERMISSION_SUCCESSS',
};

const INITIAL_STATE = {
  data: {},
  permissoes: {},
  loadingPermissoes: true,
  message: false,
  loading: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST_PERMISSION:
      return { ...state, loading: true };
    case Types.GET_REQUEST_PERMISSION_SUCCESSS:
      return {
        ...state, loading: false, loadingPermissoes: false, permissoes: action.payload.data,
      };
    case Types.REQUEST:
      return { ...state, loading: true, loadingPermissoes: true };
    case Types.SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.ERROR:
      return {
        ...state, loading: false, loadingPermissoes: true, data: {},
      };
    case Types.PUT_MESSAGE:
      return { ...state, loadingPermissoes: true, message: action.payload.message };
    case Types.LOGOUT:
      return { ...INITIAL_STATE, message: state.message };
    default:
      return state;
  }
}

export const Creators = {
  getPermissoesRequest: () => ({ type: Types.GET_REQUEST_PERMISSION }),
  getPermissoesRequestSuccess: data => ({
    type: Types.GET_REQUEST_PERMISSION_SUCCESSS,
    payload: { data },
  }),
  postLoginRequest: ({ user, password }) => ({
    type: Types.REQUEST,
    payload: {
      user,
      password,
    },
  }),
  postLoginRequestSuccess: data => ({ type: Types.SUCCESS, payload: { data } }),
  postLogoutRequest: () => ({ type: Types.LOGOUT }),
  putMessage: message => ({ type: Types.PUT_MESSAGE, payload: { message } }),
  requestError: () => ({ type: Types.ERROR }),
};
