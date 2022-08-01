import { request } from "../constants/action-type";

const initialState = { data: {}, status: "" };

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case request.REQUESTING:
      return Object.assign({}, state, {
        status: "Loading...",
      });
    case request.RECEIVED:
      return Object.assign({}, state, {
        data: action.payload,
        status: "Received",
      });
    case request.FAILED:
      return Object.assign({}, state, {
        status: "Failed",
      });
    default:
      return state;
  }
};

export default quoteReducer;
