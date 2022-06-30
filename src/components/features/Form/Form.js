import React from 'react';
import styles from './Form.module.scss';

import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import Button from '../../common/Button/Button';

const Form = () => (
  <div className={clsx('container', styles.root)}>
    <form>
      <h3>Leave a message</h3>
      <label>
        <div>Your Name</div>
        <input type='text'></input>
      </label>
      <label>
        <div>Your Email</div>
        <input type='text'></input>
      </label>
      <label>
        <div>Subject</div>
        <input type='text'></input>
      </label>
      <label>
        <div>Your Message</div>
        <textarea type='text'></textarea>
      </label>
      <Button>Submit</Button>
    </form>
  </div>
);

Form.propTypes = {
};

export default Form;
