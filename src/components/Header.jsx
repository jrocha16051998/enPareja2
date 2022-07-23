import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll'
import { onClear } from '../store/searchSlice'
import { onClearUi } from '../store/uiSclice'


export const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const toMain = () =>{
        dispatch( onClearUi())
        dispatch( onClear ())
        navigate('/')
    }
    const handleBtnInfo = () =>{
        scroller.scrollTo('info')
    }
    
    return (
        <nav className="navbar shadow header mb-1">
            <div className="container ">
                <a className="navbar-brand col-sm-8 col-md-8 text-center" onClick={ toMain }><h4 className='display-6 text-header'>💏  EnPareja2  💏</h4></a>
                <button className='btn btn-outline-secondary col-sm-2 col-md-1' onClick={ handleBtnInfo }>Info</button>
                <hr />
            </div>
        </nav>
    )
}
