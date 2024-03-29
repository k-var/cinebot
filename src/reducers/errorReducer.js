import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initialState = {
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return { vowelsError: null, error: null };
    default:
      return state;
  }
}
