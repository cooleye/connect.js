# Usage

把`src/`下的connect.js 拷贝到项目`src/`目录下，替代 `react-redux`即可。

#### 例如：
```
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

```