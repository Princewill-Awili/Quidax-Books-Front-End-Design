import React,{useState} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {MdOutlineShoppingCart as CartIcon} from 'react-icons/md'

import CartItem from '../CartItem/CartItem';

import { states } from '../../context';
import { useContext } from 'react';

const Cart = () => {

    const {cartMode, setCartMode, cart} = useContext(states);
    const [openCart, setOpenCart] = useState(true);

  return (
    <div 
        className='cart' 
        style={{width: cartMode ? "35%" : "0%", animationName: openCart ? "openCartAnime" : "closeCartAnime"}}
    >
            <div className="cartTopBar">
                <div 
                    className="cartBackContainer" 
                    onClick={()=>{
                        setOpenCart(false);
                        setTimeout(()=>{
                            setCartMode(!cartMode)
                        },500) 
                    }}
                >
                    <BiArrowBack/>
                    <span className="backTxt">Back</span>
                </div>

                <div className="cartInfo">
                    <span className="cartInfoText">Your Cart</span>
                    <div className="cartInfoIconWrapper">
                        <CartIcon className='cartInfoIcon'/>
                    </div>
                </div>
            </div>
            <div className="cartBasket">
                {
                    cart.map((item)=>(
                        <CartItem key={item.id}/>
                    ))
                }    
            </div>
    </div>
  )
}

export default Cart