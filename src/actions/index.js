import * as c from './ActionTypes';

export const makePedalApiCall = (url) => {
  return dispatch => {
    dispatch(requestPedals);
    return fetch(url)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        dispatch(getPedalsSuccess(jsonifiedResponse));
      })
      .catch((error) => {
        dispatch(getPedalsFailure(error));
      });
  }
}

export const requestPedals = () => ({
  type: c.REQUEST_PEDALS
});

export const getPedalsSuccess = (pedals) => ({
  type: c.GET_PEDALS_SUCCESS,
  pedals
});

export const getPedalsFailure = (error) => ({
  type: c.GET_PEDALS_FAILURE,
  error
});