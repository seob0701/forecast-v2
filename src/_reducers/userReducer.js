import { REGISTER } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case REGISTER:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
}
