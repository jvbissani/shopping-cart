import React from 'react'; //imr
import { AiOutlineShoppingCart } from "react-icons/ai";

import './CartButton.css';

function CartButton() { //ffc
  return ( 
    <button type='button' className='cart__button'>
      <AiOutlineShoppingCart />
      <span className='cart-status'>1</span>
    </button>
   );
}

export default CartButton;