import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from './Form.module.scss';

import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import Button from '../../common/Button/Button';

const Form = () => {

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = () => {
    const messageParam = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    console.log(messageParam);
  };

  return (
    <div className={clsx('container', styles.root)}>
      <form onSubmit={validate(handleSubmit)}>
        <h3>Leave a message</h3>
        <label>
          <div>Your Name</div>
          <input
            {...register('name', { required: true, minLength: 3 })}
            defaultValue={name}
            type='text'
            onChange={e => setName(e.target.value)} />
          {errors.name && <div className={styles.error}>Title requires at least 3 characters!</div>}
        </label>
        <label>
          <div>Your Email</div>
          <input
            {...register('email', { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i } })}
            defaultValue={email}
            type='text'
            onChange={e => setEmail(e.target.value)} />
          {errors.email && <div className={styles.error}>Email must be in example@example.com format!</div>}
        </label>
        <label>
          <div>Subject</div>
          <input
            {...register('subject', { required: true, minLength: 10 })}
            defaultValue={subject}
            type='text'
            onChange={e => setSubject(e.target.value)} />
          {errors.subject && <div className={styles.error}>Subject requires at least 10 characters!</div>}
        </label>
        <label>
          <div>Your Message</div>
          <textarea
            {...register('message', { required: true, minLength: 20 })}
            defaultValue={message}
            type='text'
            onChange={e => setMessage(e.target.value)} />
          {errors.message && <div className={styles.error}>Subject requires at least 20 characters!</div>}
        </label>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};

Form.propTypes = {
};

export default Form;
