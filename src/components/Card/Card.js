import React, {useEffect, useState} from 'react';
import cx from 'classnames';
import './Card.css';
import './sprites.css';
import {useSelector} from "react-redux";

const Card = ({ value, communityCard }) => {
    const [flag, setFlag] = useState('');
    const communityCardsState = useSelector((state) => state.communityCards);

    useEffect(()=>{
        if (!communityCard && value !== 'X' ) {
            communityCardsState.indexOf(value) !== -1 ? setFlag('PAIR') : setFlag('');
        }
    }, [communityCardsState]);

    return (
        <div className={cx('Card', `Card-${value}`, flag)}  />
    );
};

export default Card;
