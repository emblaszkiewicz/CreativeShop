import React from 'react';
import styles from './WorkerBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

// import Components;

const WorkerBox = employee => (
  <div className={styles.root}>
    <img className={styles.workerImg} src={employee.image} alt={employee.name} />
    <div className={styles.workerDesc}>
      <p>{employee.department}</p>
      <h4>{employee.name}</h4>
      <div className={styles.icons}>
        <a href={employee.linkedin} target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
        </a>
        <a href={employee.facebook} target="_blank">
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
        </a>
        <a href={employee.instagram} target="_blank">
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </a>
        <a href={employee.twitter} target="_blank">
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
        </a>
      </div>
    </div>
  </div>
);

WorkerBox.propTypes = {
  employee: PropTypes.object,
};

export default WorkerBox;
