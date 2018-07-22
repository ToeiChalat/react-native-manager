import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INIATIAL_STATE = {
  email: '',
  password: ''
};

export default (state = INIATIAL_STATE, action) => {
  console.log(action);
  switch(action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, passowrd: action.payload };
    default:
      return state;
  }
};
