import pokemonReducer from './pokemonReducers'

import { combineReducers } from 'redux'

const mainReducers = combineReducers({
  pokemon: pokemonReducer
})

export default mainReducers
