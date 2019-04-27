import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_TRONALDDUMP = 'RECEIVE_TRONALDDUMP'
export const RECEIVE_NUCKCHORRIS = 'RECIEVE_NUCKCHORRIS'
export const RECEIVE_DADJOKE = 'RECIEVE_DADJOKE'
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

export const receiveNuckChorris = (value) => {
  return {
    type: RECEIVE_NUCKCHORRIS,
    nuckChorris: value
  }
}

export const receiveDadJoke = (joke) => {
  return {
    type: RECEIVE_DADJOKE,
    dadJoke: joke.joke
  }
}



export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage,
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

export function fetchNuckChorris() {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/nuckchorris`)
      .then(res => {
        dispatch(receiveNuckChorris(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export function fetchDadJoke() {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/dadjoke`)
      .set('Accept', 'application/json')
      .then(res => {
        dispatch(receiveDadJoke(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
