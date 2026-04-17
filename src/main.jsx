import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// ✅ Redux imports
import { Provider } from 'react-redux'
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ✅ Wrap App with Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)