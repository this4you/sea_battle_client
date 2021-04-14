import React from 'react';
import classNames from 'classnames';

import './Cell.scss';

const Cell = ({
                  y, x, isShip, isSelected,
                  isWounded, isKilled, isShootSelected,
                  isMissed, size = 60
              }) => {
    return (
        <div
            className={
                classNames('cell',
                    {'ship': isShip || isSelected},
                    {'ship__shoot-selected': isShootSelected},
                    {'ship__shoot-wounded': isWounded && !isKilled},
                    {'ship__shoot-missed': isMissed},
                    {'ship__shoot-killed': isKilled},)
            }
            data-x={x} data-y={y} style={{'width': size, 'height': size}}/>
    );
};

export default Cell;
