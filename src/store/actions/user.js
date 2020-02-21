export const userActionsType = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',

  SIGN_UP: 'SIGN_UP',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
};

export const login = (payload, callback) => ({
  type: userActionsType.LOGIN,
  payload,
  callback,
});

export const loginSuccess = (payload) => ({
  type: userActionsType.LOGIN_SUCCESS,
  payload,
});

export const signUp = (payload, callback) => ({
  type: userActionsType.SIGN_UP,
  payload,
  callback
});
