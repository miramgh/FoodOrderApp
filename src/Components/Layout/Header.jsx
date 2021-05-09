import React from 'react'
import meals from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCardButton'
import './Header.css'

function Header(props) {
    return (
        <>
           <header className ="header">
               <h1 className ="heading">React Meals</h1>
               <HeaderCartButton onClick = {props.onShowCart} />
            </header> 
           <div className ="main-image">
               <img src={meals} alt="Meals"/>
           </div>
        </>
    )
}

export default Header
