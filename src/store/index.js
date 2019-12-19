
// import {createStore} from 'redux'

import {createStore} from '../myredux'

import reducer from './reducer'

const initialState = {
    counter:0,
    title:'nihao'
}
const store = createStore(reducer,initialState)

export default store;
