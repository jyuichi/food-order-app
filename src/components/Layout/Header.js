import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import fastFood from '../../assets/fast-food.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Order App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={fastFood} alt='A table full of delicious fast food!' />
      </div>
    </Fragment>
  );
};

export default Header;
