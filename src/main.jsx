import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './index.css'
import { store } from './store/store'
import { ResultMoviePage } from './components/ResultMoviePage'
import { SearchProvider } from './components/SearchProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <Provider store={ store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} ></Route>
                <Route path='/result' element={<ResultMoviePage />} ></Route>
                <Route path='/select-providers' element={<SearchProvider/>} ></Route>
                <Route path='*' element={<App />} ></Route>
            </Routes>
        

        </BrowserRouter>
        
    </Provider>
    
)
