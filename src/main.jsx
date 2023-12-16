import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginContextProvider from './GlobalContext/context.jsx'
import CartContextProvider from './User/context/context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
 <BrowserRouter>
 <LoginContextProvider>
 <CartContextProvider>
 <App />
 </CartContextProvider>
 </LoginContextProvider>
 </BrowserRouter>
</React.StrictMode>,
)
