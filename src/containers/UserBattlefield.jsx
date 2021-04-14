import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Battlefield} from '../components';
import {gameConfigActions} from '../redux/actions';

const UserBattlefield = ({cells, fetchGetCells}) => {
    useEffect(() => {
        if (cells.length === 0) {
            fetchGetCells();
        }
    }, [cells]);
    return (
        <Battlefield size={520} cells={cells}/>
    )
};
export default connect(({gameConfigs}) => (
    {
        ...gameConfigs
    }
), gameConfigActions)(UserBattlefield);
