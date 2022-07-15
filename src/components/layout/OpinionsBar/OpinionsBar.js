import React from 'react';
import styles from './OpinionsBar.module.scss';
import { useSelector } from 'react-redux/es/exports';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { Carousel } from 'react-responsive-carousel';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

import { getAllOpinions } from '../../../../src/redux/opinionsRedux';

// import Components;

const OpinionsBar = () => {

  const opinions = useSelector(getAllOpinions);

  return (
    <div className={styles.root}>
      <Carousel interval={4500} autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={false} showStatus={false}>
        {opinions.map(opinion =>
          <div key={opinion._id} className={styles.content}>
            <img src={opinion.image} alt={opinion.name} />
            <h3>{opinion.name}</h3>
            <p>{opinion.text}</p>
          </div>
        )}
      </Carousel>
    </div>
  );
};

OpinionsBar.propTypes = {
};

export default OpinionsBar;
