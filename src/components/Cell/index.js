import React from 'react';
import classNames from 'classnames';

import './Cell.scss';

const Cell = ({y, x, isShip}) => {
    return (
        <div className={classNames('cell', {'ship': isShip})} data-x={x} data-y={y}> </div>
    );
};

export default Cell;
