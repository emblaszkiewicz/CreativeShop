import React from 'react';
import styles from './Contact.module.scss';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import ContactLayout from '../../layout/ContactLayout/ContactLayout';

const Contact = () => (
  <div className={styles.root}>
    <ContactLayout />
  </div>
);

Contact.propTypes = {
};

export default Contact;
