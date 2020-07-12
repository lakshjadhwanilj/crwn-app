import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';
// COMPONENTS
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
// CSS
import './shop.styles.scss';

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <PreviewCollection
                    key={id}
                    {...otherCollectionProps}
                />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);