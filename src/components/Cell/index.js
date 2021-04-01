import React from 'react';
import classNames from 'classnames';

import './Cell.scss';

const Cell = ({ y, x, isShip, isSelected, size = 60}) => {
    return (
        <div className={classNames('cell', { 'ship': isShip || isSelected })} data-x={x} data-y={y} style={{'width':size, 'height': size}}/>
    );
};

export default Cell;
