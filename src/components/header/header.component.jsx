import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
// COMPONENTS
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// CSS
import { OptionDiv } from './header.styles';
// LOGO
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, hidden }) => {
    return (
        <nav className='navbar navbar-expand-md navbar-light bg-light fixed-top'>
            <div className='container'>
                <Link to='/' className='navbar-brand'>
                    <Logo className='logo' />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id='navbar'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <Link to='/shop' className='nav-link'>
                                SHOP{' '}
                                <i className="fab fa-shopify"></i>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/shop' className='nav-link'>
                                CONTACT{' '}
                                <i className="far fa-address-card"></i>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            {
                                currentUser ? (
                                    <OptionDiv onClick={() => auth.signOut()} className='nav-link'>
                                        SIGN OUT{' '}
                                        <i className="fas fa-sign-out-alt"></i>
                                    </OptionDiv>
                                ) : (
                                        <Link to='/signin' className='nav-link'>
                                            SIGN IN{' '}
                                            <i className="fas fa-sign-in-alt"></i>
                                        </Link>
                                    )
                            }
                        </li>
                        <li className='nav-item'>
                            <CartIcon className='nav-link' />
                        </li>
                    </ul>
                </div>
                {hidden ? null : <CartDropdown />}
            </div>
        </nav>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);