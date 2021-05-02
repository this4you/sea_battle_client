import React, {useEffect} from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {gameConfigActions} from '../redux/actions';

const BattlefieldMiddleZone = ({canShoot}) => {
    return (
        <div className={classNames('middle-zone',
            {'middle-zone__can_shoot': canShoot})}>{canShoot ? "Let's shoot!" : "Wait..."}</div>
    )
};
export default connect(({gameConfigs}) => (
    {
        ...gameConfigs
    }
), gameConfigActions)(BattlefieldMiddleZone);
