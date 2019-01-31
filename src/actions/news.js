import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from '../actionTypes';

const API_END_POINT = 'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc'

export const fetchNews = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_NEWS_REQUEST,
    })
    const URL = `${API_END_POINT}`;
    return fetch(URL, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: FETCH_NEWS_SUCCESS,
          articles: json.articles,
        })
      })
      .catch(error => {
        console.log('fetchQuestions  error - ', error)
        dispatch({
          type: FETCH_NEWS_FAILURE,
          error: error,
        })
      })
  }
}

