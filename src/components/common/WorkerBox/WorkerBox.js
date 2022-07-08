import React from 'react';
import styles from './WorkerBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

// import Components;

const WorkerBox = () => (
  <div className={styles.root}>
    <img className={styles.workerImg} src='../../images/Employees/employee1.jpg' alt='employee' />
    <div className={styles.workerDesc}>
      <p>Finace Manager</p>
      <h4>Miguel Rodrigez</h4>
      <div className={styles.icons}>
        <NavLink to='/' target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
        </NavLink>
        <NavLink to='/' target="_blank">
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
        </NavLink>
        <NavLink to='/' target="_blank">
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </NavLink>
        <NavLink to='/' target="_blank">
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} /></NavLink>
      </div>
    </div>
  </div>
);

WorkerBox.propTypes = {
};

export default WorkerBox;
