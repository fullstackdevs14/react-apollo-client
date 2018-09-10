export const ACTION_TYPES = {
  SET_TOKEN: 'SET_TOKEN',
  SET_USER: 'SET_USER'
};

export const setUser = (user) => ({
  type: ACTION_TYPES.SET_USER,
  user
});

export const setToken = (token) => ({
  type: ACTION_TYPES.SET_TOKEN,
  token
});
