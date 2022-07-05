import React from 'react';
import styles from './AboutLayout.module.scss';

import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import AboutBox from '../../common/AboutBox/AboutBox';
import WorkerBox from '../../common/WorkerBox/WorkerBox';

const AboutLayout = () => (
  <div className={clsx('container', styles.root)}>
    <div className={styles.row}>
      <div className={styles.headText}>
        <span>About our online store</span>
        <h3>Hello, <br />With 25+ years of experience</h3>
        <p>Praesent auctor pharetra risus, quis sagittis nulla efficitur quis. In pretium vitae.</p>
        <p>Maecenas rutrum blandit leo, sit amet pretium tortor convallis at. Nulla feugiat turpis ac quam pulvinar, pellentesque porttitor diam condimentum. Etiam bibendum dolor sit amet dapibus posuere. Donec eget magna luctus, fringilla urna at, malesuada purus. Class aptent taciti sociosqu ad litora torquent per.</p>
      </div>
      <img className={styles.headImage} src='../../images/AboutPage/meeting.jpg' alt='test' />
    </div>
    <div className={styles.row}>
      <div className={styles.headText}>
        <h3>We and our clients are happy to cooperate with our company</h3>
        <div className={styles.subTitle}>Our features</div>
      </div>
    </div>
    <div className={styles.row}>
      <AboutBox />
      <AboutBox />
      <AboutBox />
    </div>
    <div className={styles.row}>
      <div className={styles.headText}>
        <h3>Our best projects</h3>
        <div className={styles.subTitle}>How it works</div>
      </div>
    </div>
    <div className={styles.row}>
      <img className={styles.headImage} src='../../images/AboutPage/meeting1.jpg' alt='test' />
      <img className={styles.headImage} src='../../images/AboutPage/meeting1.jpg' alt='test' />
    </div>
    <div className={styles.row}>
      <div className={styles.headText}>
        <h3>Our workalbe team</h3>
        <div className={styles.subTitle}>Best team</div>
      </div>
    </div>
    <div className={styles.row}>
      <WorkerBox />
      <WorkerBox />
      <WorkerBox />
      <WorkerBox />
      <WorkerBox />
    </div>
  </div>
);

AboutLayout.propTypes = {
};

export default AboutLayout;
