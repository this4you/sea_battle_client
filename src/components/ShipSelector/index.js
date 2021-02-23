import React from 'react';
import classNames from 'classnames';
import './ShipSelector.scss';
const Selector = ({ size, count, isActive, onSelectSelected }) => {
    let items = [];
    for (let i = 0; i < size; i++) {
        items.push(<div key={i} className={classNames('ship-selector-cell', { 'ship-selector-cell-active': isActive })} />);
    }
    return (
        <div className="ship-selector-wrap" onClick={() => onSelectSelected(size)} >
            <div className="ship-selector-ship">
                {items}
            </div>
            <h2>{count}</h2>
        </div >
    )
}

const ShipSelector = ({ selectrors, currentSelector, onSelectSelected }) => {
    return (
        <div className="ship-selector">
            <div>
                {selectrors.map(item => <Selector
                    size={item.size}
                    onSelectSelected={onSelectSelected}
                    key={item.size}
                    count={item.count}
                    isActive={currentSelector === item.size} />)}
            </div>
        </div>
    );
};

export default ShipSelector;
