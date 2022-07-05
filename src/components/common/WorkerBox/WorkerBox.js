import React from 'react';
import styles from './WorkerBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
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
        <FontAwesomeIcon icon={faLink} className={styles.icon} />
        <FontAwesomeIcon icon={faLink} className={styles.icon} />
        <FontAwesomeIcon icon={faLink} className={styles.icon} />
        <FontAwesomeIcon icon={faLink} className={styles.icon} />
      </div>
    </div>
  </div>
);

WorkerBox.propTypes = {
};

export default WorkerBox;
