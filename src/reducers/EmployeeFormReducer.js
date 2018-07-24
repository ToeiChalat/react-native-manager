import {
 EMPLOYEE_UPDATE,
 EMPLOYEE_CREATE,
 EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITAIL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITAIL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITAIL_STATE;
    default:
      return state;
  }
}
