import React from 'react';
import styles from './OpinionsBar.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { Carousel } from 'react-responsive-carousel';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

// import Components;

const OpinionsBar = () => (
  <div className={styles.root}>
    <Carousel interval={4500} autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={false} showStatus={false}>
      <div className={styles.content}>
        <img src='../../images/Opinions/opinion1.jpg' alt='' />
        <h3>Amanda Doe</h3>
        <p>Aenean vehicula sollicitudin risus nec tincidunt. Etiam eu blandit ipsum. Proin et varius libero, eu tincidunt augue. Etiam aliquet posuere facilisis. Quisque eget neque a nunc cursus tincidunt ut porta.</p>
      </div>
      <div className={styles.content}>
        <img src='../../images/Opinions/opinion2.jpg' alt='' />
        <h3>John Doe</h3>
        <p>Aenean vehicula sollicitudin risus nec tincidunt. Etiam eu blandit ipsum. Proin et varius libero, eu tincidunt augue. Etiam aliquet posuere facilisis. Quisque eget neque a nunc cursus tincidunt ut porta.</p>
      </div>
      <div className={styles.content}>
        <img src='../../images/Opinions/opinion3.jpg' alt='' />
        <h3>Bob Doe</h3>
        <p>Aenean vehicula sollicitudin risus nec tincidunt. Etiam eu blandit ipsum. Proin et varius libero, eu tincidunt augue. Etiam aliquet posuere facilisis. Quisque eget neque a nunc cursus tincidunt ut porta.</p>
      </div>
    </Carousel>
  </div>
);

OpinionsBar.propTypes = {
};

export default OpinionsBar;
