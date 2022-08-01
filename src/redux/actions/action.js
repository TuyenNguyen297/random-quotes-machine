import { request } from "../constants/action-type";

const requesting = () => ({ type: request.REQUESTING });
const received = (response) => ({
  type: request.RECEIVED,
  payload: response,
});
const fail = () => ({ type: request.FAILED });

export default function getQuotesAction() {
  return function (dispatch) {
    dispatch(requesting());
    fetch("https://api.quotable.io/random")
      .then((response) => (response.ok ? response.json() : {}))
      .then((response) => {
        dispatch(received(response));
        console.log(response);
      })
      .catch((err) => {
        dispatch(fail());
      });
  };
}
