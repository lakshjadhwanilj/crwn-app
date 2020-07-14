import React from 'react';
// COMPONENTS
import CollectionItem from '../collection-item/collection-item.component';
// CSS
import './preview-collection.styles.scss';

const PreviewCollection = ({ title, items }) => (
    <div className='preview-collection text-center'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview row justify-content-center'>
            {
                items
                    .filter((item, index) => index < 2)
                    .map((item) => (
                        <CollectionItem
                            key={item.id}
                            item={item}
                        />
                    ))
            }
        </div>
    </div>
);

export default PreviewCollection;