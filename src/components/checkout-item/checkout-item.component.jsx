import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
// CSS
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item" />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='sub' onClick={() => removeItem(cartItem)}>
                    <i className='fas fa-minus'></i>
                </div>
                <span className='value'>{quantity}</span>
                <div className='add' onClick={() => addItem(cartItem)}>
                    <i className='fas fa-plus'></i>
                </div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>
                <i className='fas fa-trash'></i>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);