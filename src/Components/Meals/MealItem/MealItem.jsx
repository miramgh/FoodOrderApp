import React from 'react'
import {useContext } from 'react'
import cartContext from '../../../store/cart-context'
import MealItemForm from './MealItemForm'
import './MealItem.css'
function MealItem(props) {

    const cartCtx = useContext(cartContext)
    const price = `$ ${props.price.toFixed(2)}`
    const addToCartHandler = amount =>{
        cartCtx.addItem({
            id : props.id , 
            name :props.name, 
            amount : amount, 
            price : props.price
        })
    }
    return (
        <li className ="meal">
            <div>
                <h3>{props.name}</h3>
                <div className ="description">{props.description}</div>
                <div className ="price">{price}</div>
                
            </div>
            <MealItemForm onAddToCart={addToCartHandler} />
        </li>
    )
}

export default MealItem
