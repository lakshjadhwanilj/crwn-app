import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
// COMPONENTS
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
// CSS
// import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <table className='table table-striped table-hover'>
            <thead>
                <tr className=''>
                    <th scope='col'>Product</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    cartItems.map(cartItem =>
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                }
            </tbody>
        </table>
        <div className='total text-right border-top border-bottom border-dark p-3'>
            <h5 className='text-dark'>TOTAL: ${total}</h5>
        </div>
        <div className='text-center p-3'>
            <p className='text-danger'>*Please use the following test credit card for payments*</p>
            <p className='text-danger'>4242 4242 4242 4242 - Exp - 01/21 - CVV: 123</p>
            <StripeCheckoutButton price={total} />
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);