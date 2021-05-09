import React , {useContext} from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import './HeaderCardButton.css'

function HeaderCardButton(props) {
    const cartCtx = useContext(CartContext)

    const numOfCartItems = cartCtx.items.reduce((currNum , item)=>{
        return currNum+ item.amount
    },0)

    return (
        <button className ="button" onClick={props.onClick}>
            <span className= "icon">
                <CartIcon />
            </span>
            <span>Your Card</span>
            <span className="badge"> {numOfCartItems} </span>
        </button>
    )
}

export default HeaderCardButton
