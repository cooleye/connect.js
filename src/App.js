import React from 'react';
import './App.css';
import store  from './store'

import {Provider} from 'react-redux'
import Counter from './components/Counter'


import Cart from './components/Cart'
import {Container} from './connect.js'

// 这一部分使用connect.js
let c = <Container  store={store}>
            <Cart/>
        </Container>

// 这一部分使用react-redux
let p = <Provider store={store}>
            <Counter/>
        </Provider>

function App() {
  return (
  <div>{c}</div>
  );
}

export default App;
