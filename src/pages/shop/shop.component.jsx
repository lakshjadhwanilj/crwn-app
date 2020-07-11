import React from 'react';
import SHOP_DATA from './shop.data';
// COMPONENTS
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
// CSS
import './shop.styles.scss';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (
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
    }
}

export default ShopPage;