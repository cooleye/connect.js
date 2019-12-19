
// import {createStore} from 'redux'

// 把上面的redux注释，换成myredux即可，其他使用和redux一样。
import {createStore} from '../myredux'

import reducer from './reducer'

const initialState = {
    counter:0,
    title:'nihao'
}
const store = createStore(reducer,initialState)

export default store;
