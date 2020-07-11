import React from 'react';
// COMPONENTS
import CustomButton from '../custom-button/custom-button.component';
// CSS
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;