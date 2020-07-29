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

export const getSelectedPedal = (id) => {
  return dispatch => {
    dispatch(requestSelectedPedal);
    return fetch(`http://localhost:3001/api/v1/pedals/${id}`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        dispatch(getSelectedPedalSuccess(jsonifiedResponse));
      })
      .catch((error) => {
        dispatch(getSelectedPedalFailure(error));
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


export const requestSelectedPedal = () => ({
  type: c.REQUEST_PEDAL_BY_ID
});

export const getSelectedPedalSuccess = (pedal) => ({
  type: c.GET_SELECTED_PEDAL_SUCCESS,
  pedal
});

export const getSelectedPedalFailure = (error) => ({
  type: c.GET_SELECTED_PEDAL_FAILURE,
  error
});
