/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const RECEIVE_TERMS = 'RECEIVE_TERMS'

// ------------------------------------
// Actions
// ------------------------------------
// NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
// If you're unfamiliar with Flow, you are completely welcome to avoid annotating your code, but
// if you'd like to learn more you can check out: flowtype.org.
// DOUBLE NOTE: there is currently a bug with babel-eslint where a `space-infix-ops` error is
// incorrectly thrown when using arrow functions, hence the oddity.
function receiveTerms(terms) {
  return {
    type: RECEIVE_TERMS,
    payload: terms
  }
}

export function fetchTerms() {
  return dispatch => {
    // This will call the fucking api to get the terms
    const temrs = [ { text: 'test', status: true }, { text: 'test2', status: false } ]
    dispatch(receiveTerms(terms))
  }
}

export function sendTerms(terms) {
  return dispatch => {
    // Send request to that api end point with terms
  }
}

export const actions = {
  receiveTerms
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RECEIVE_TERMS]: (state, action) => action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function counterReducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
