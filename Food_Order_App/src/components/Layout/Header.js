import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/pic1.jpg'; 
import classes from './Header.module.css';

const Header = props => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>StreetVittels</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delecious meals!!" />
        </div>
    </Fragment>
    );
};

export default Header;