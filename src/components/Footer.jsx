import React from 'react'
import github from '../images/github.png'
import ld from '../images/ld.png'
import ig from '../images/ig.png'

export const Footer = () => {
    return (
        <div className=' container text-center justify-content-center'>
            <hr />
            <div className='row'>
                <p> Created By Andrés</p>
            </div>
            <div className='row justify-content-center'>
                <div className='col-1'>
                    <a 
                        href='https://github.com/jrocha16051998' 
                        target='_blank' 
                        rel='noopener noreferrer'> 
                        <img className='img-footer'src={github} alt='link github' />
                    </a>
                </div>
                <div className='col-1'>
                    <a 
                        href='https://www.linkedin.com/in/juan-andr%C3%A9s-rocha-romano-b73b7323b/' 
                        target='_blank' 
                        rel='noopener noreferrer'> 
                        <img className='img-footer'src={ld} alt='link Linkedin' />
                    </a>
                </div>
                <div className='col-1'>
                    <a 
                        href='https://www.instagram.com/jarrche/' 
                        target='_blank' 
                        rel='noopener noreferrer'> 
                        <img className='img-footer'src={ig} alt='link Instagram' />
                    </a>
                    
                </div>
            </div>
            
            
            
            
            
            
        </div>
    )
}
