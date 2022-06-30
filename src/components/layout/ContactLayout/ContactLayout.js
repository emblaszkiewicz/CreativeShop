import React from 'react';
import styles from './ContactLayout.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import Form from '../../features/Form/Form';

const ContactLayout = () => (
  <div className={clsx('container', styles.root)}>
    <div className={styles.info}>
      <h3>Our contact</h3>
      <div className={styles.infoBox}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
        <div className={styles.infoBoxContent}>
          <h4>Address:</h4>
          <p>1093 Marigold Lane,</p>
          <p>Coral Way, Miami</p>
          <p>Florida, 33169</p>
        </div>
      </div>
      <div className={styles.infoBox}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <div className={styles.infoBoxContent}>
          <h4>Phone number:</h4>
          <p>+55 123-458-657</p>
        </div>
      </div>
      <div className={styles.infoBox}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className={styles.infoBoxContent}>
          <h4>Email:</h4>
          <p>example@example.com</p>
        </div>
      </div>
    </div>
    <Form />
  </div>
);

ContactLayout.propTypes = {
};

export default ContactLayout;
