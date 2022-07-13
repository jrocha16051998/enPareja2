import React, { useState } from 'react'
import { animateScroll as scroll} from 'react-scroll'
export const BtnToTop = () => {
    const [btnVisible, setBtnVisible] = useState(false)
    window.addEventListener('scroll', () =>{
        window.scrollY > 400
            ? !btnVisible 
                && setBtnVisible(true)
            : btnVisible  
                && setBtnVisible( false )
    })
    const handletoTop =() =>{
        scroll.scrollToTop({duration: 100, smooth:true})

    }
    return (
        <button className={`btn-to-top ${ btnVisible ? 'd.block': 'd-none'}`} onClick={handletoTop}>
            ⇧
        </button>
    )
}
