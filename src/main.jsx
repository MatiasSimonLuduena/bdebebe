import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { HashRouter } from "react-router-dom"

import store from './redux/store.js'
import { Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
)
