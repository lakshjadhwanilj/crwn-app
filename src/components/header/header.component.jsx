import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
// COMPONENTS
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// CSS
import './header.styles.scss';
// LOGO
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP{' '}
                    <i className="fab fa-shopify"></i>
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT{' '}
                    <i className="far fa-address-card"></i>
                </Link>
                {
                    currentUser ? (
                        <div className='option' onClick={() => auth.signOut()}>
                            SIGN OUT{' '}
                            <i className="fas fa-sign-out-alt"></i>
                        </div>
                    ) : (
                            <Link className='option' to='/signin'>
                                SIGN IN{' '}
                                <i className="fas fa-sign-in-alt"></i>
                            </Link>
                        )
                }
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    );
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);