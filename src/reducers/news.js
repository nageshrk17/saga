import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from '../actionTypes'


const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.articles,
      };
    case FETCH_NEWS_FAILURE: 
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
