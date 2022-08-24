import React from 'react'
import { Element } from 'react-scroll'
import { BtnToTop } from '../components/BtnToTop'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Info } from '../components/Info'

export const Layout = ({ children }) => {
    return (
        <>  
            <Header/>
            {children}
            <Element name='info'>
                <Info />
            </Element>
            
            <BtnToTop/>
            <Footer />
        </>
    )
}
