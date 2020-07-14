import React from 'react';
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions';
// CSS
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='col-xs-6'>
            <div className='card'>
                <img className='card-img-top' src={imageUrl} alt="" />
                <div className='col text-center'>
                    <h5 className='card-title m-0'>{name}</h5>
                    <p className='m-0 border-bottom border-dark'>${price}</p>
                    <button className='btn btn-block' onClick={() => addItem(item)} > Add To Cart </button>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);