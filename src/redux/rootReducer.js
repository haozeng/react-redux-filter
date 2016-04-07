import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import terms from './modules/terms'

export default combineReducers({
  terms,
  router
})
