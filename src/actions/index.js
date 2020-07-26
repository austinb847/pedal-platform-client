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
  type: c.REQUEST_ANIMALS
});

export const getPedalsSuccess = (animals) => ({
  type: c.GET_ANIMALS_SUCCESS,
  animals
});

export const getPedalsFailure = (error) => ({
  type: c.GET_ANIMALS_FAILURE,
  error
});