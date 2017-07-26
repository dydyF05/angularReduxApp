import { userTypes } from "../actions/userTypes";
import { userActions } from "../actions/userActions";

const initialState = {
  current: null,
  isFetching: false
};

export default (state = initialState, action) => {

  switch (action.type) {

    case userTypes.REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case userTypes.RECEIVE_USER:
      return {
        ...state,
        isFetching: false,
        current: action.user
      };
    default:
      return state;
  }
};
