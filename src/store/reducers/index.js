import { ACTION_TYPES } from "../actions";

const initialState = {
  user: null,
  token: ''
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_TYPES.SET_TOKEN:
      return {
        ...state,
        token: action.token
      }

    case ACTION_TYPES.SET_USER:
      return { 
        ...state,
        user: action.user
      }

    default:
      return state;
  }
}

export default reducer;
