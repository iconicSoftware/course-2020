import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

import Counter from './components/Counter'
import Info from './components/Info'


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Info />
        
        <Counter />
      </div>
    </Provider>
  )
}

export default App