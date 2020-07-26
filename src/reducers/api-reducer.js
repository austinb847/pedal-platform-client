import * as c from './../actions/ActionTypes';

const initialState = {
  isLoading: false,
  pedals: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_PEDALS:
      return {
        ...state,
        isLoading: true
      }
    case c.GET_PEDALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pedals: action.pedals
      }
    case c.GET_PEDALS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state;
  }
}