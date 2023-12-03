import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Product from './Product'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="/:productID" element={<Product />} />
         </Routes>
      </Router>
   </React.StrictMode>,
   document.getElementById('root')
)
