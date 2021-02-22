import React from 'react';
import classNames from 'classnames';

import './ShipSelector.scss';

const Selector = ({ size, count }) => {
    let items = [];
    for (let i = 0; i < size; i++) {
        items.push(<div className="ship-selector-cell" />);
    }
    return (
        <div className="ship-selector-wrap">
            <div className="ship-selector-ship">
                {items}
            </div>
            <h2>{count}</h2>
        </div>
    )
}

const ShipSelector = () => {
    let selectrors = [
        {
            size: 1,
            count: 4
        },
        {
            size: 2,
            count: 3
        },
        {
            size: 3,
            count: 2
        },
        {
            size: 4,
            count: 1
        },
    ]
    return (
        <div className="ship-selector">
            <div>
                {selectrors.map(item => <Selector size={item.size} count={item.count} />)}
            </div>
        </div>
    );
};

export default ShipSelector;
