import React from 'react';
import classNames from 'classnames';
import './ShipSelector.scss';

const Selector = ({size, count, isActive, isEnabled, onSelectSelected}) => {
    let items = [];
    for (let i = 0; i < size; i++) {
        items.push(
            <div key={i}
                 className={classNames('ship-selector-cell',
                     {'ship-selector-cell-active': isActive && isEnabled},
                     {'ship-selector-cell-unenable': !isEnabled})}/>
        );
    }
    return (
        <div className="ship-selector-wrap" onClick={() => onSelectSelected(size)}>
            <div className="ship-selector-ship">
                {items}
            </div>
            <h2>{count}</h2>
        </div>
    )
}

const ShipSelector = ({selectrors, currentSelector, onSelectSelected, visible}) => {
    if (visible)
        return (
            <div className="ship-selector">
                <div>
                    {selectrors.map(item => <Selector
                        size={item.size}
                        onSelectSelected={onSelectSelected}
                        key={item.size}
                        count={item.count}
                        isEnabled={item.count > 0}
                        isActive={currentSelector === item.size}/>)}
                </div>
            </div>
        );
    else
        return (
            <div/>
        )
        };

export default ShipSelector;
