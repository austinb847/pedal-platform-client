import * as c from './../actions/ActionTypes';

const initialState = {
  isLoading: false,
  pedal: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_PEDAL_BY_ID:
      return {
        ...state,
        isLoading: true
      }
    case c.GET_SELECTED_PEDAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pedal: action.pedal
      }
    case c.GET_SELECTED_PEDAL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state;
  }
}