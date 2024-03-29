import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/main/App'
import { Provider } from 'react-redux'
import { Routes, Route, HashRouter } from 'react-router-dom'


import './index.css'
import { store } from './store/store'
import { ResultMoviePage } from './components/ResultMoviePage'
import { SearchProvider } from './components/searchProviders/SearchProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <Provider store={ store}>
        <HashRouter>
            <Routes>
                <Route path='/' element={<App />} ></Route>
                <Route path='/result' element={<ResultMoviePage />} ></Route>
                <Route path='/select-providers' element={<SearchProvider/>} ></Route>
                <Route path='*' element={<App />} ></Route>
            </Routes>
        

        </HashRouter>
        
    </Provider>
    
)
