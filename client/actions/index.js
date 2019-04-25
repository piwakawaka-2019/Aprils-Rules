import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_TRONALDDUMP = 'RECEIVE_TRONALDDUMP'
export const REQUEST_POSTS = 'REQUEST_POSTS'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receiveTronaldDump = (quote) => {
  return {
    type: RECEIVE_TRONALDDUMP,
    tronaldDump: quote.value
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchTronaldDump () {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/tronalddump`)
      .then(res => {
        dispatch(receiveTronaldDump(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
