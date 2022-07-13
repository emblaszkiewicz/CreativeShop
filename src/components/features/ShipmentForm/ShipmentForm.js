import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './ShipmentForm.module.scss';

import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';

// import clsx from 'clsx';

import { updateCart } from '../../../../src/redux/cartRedux.js';

// import Components;

const ShipmentForm = ({ action, cartProducts, message }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const [name, setName] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [phone, setPhone] = useState();

  const handleSubmit = () => {
    const order = {
      products: cartProducts,
      message: message,
      shippingAddress: {
        name: name,
        street: street,
        city: city,
        phone: phone,
      },
    };
    console.log(order);
    //navigate('/');
  };

  return (
    <div className={styles.root}>
      <h3>Shipment Address</h3>
      <form onSubmit={validate(handleSubmit)}>
        <label>
          <div>Name</div>
          <input
            {...register('name', { required: true, minLength: 3 })}
            defaultValue={name}
            type='text'
            onChange={e => setName(e.target.value)} />
          {errors.name && <div className={styles.error}>Title requires at least 3 characters!</div>}
        </label>
        <label>
          <div>Street</div>
          <input
            {...register('street', { required: true, minLength: 5 })}
            defaultValue={street}
            type='text'
            onChange={e => setStreet(e.target.value)} />
          {errors.street && <div className={styles.error}>Street requires at least 5 characters!</div>}
        </label>
        <label>
          <div>City</div>
          <input
            {...register('city', { required: true, minLength: 5 })}
            defaultValue={city}
            type='text'
            onChange={e => setCity(e.target.value)} />
          {errors.city && <div className={styles.error}>City requires at least 5 characters!</div>}
        </label>
        <label>
          <div>Phone</div>
          <input
            {...register('phone', { required: true, pattern: { value: /^(0|[1-9]\d*)(\.\d+)?$/ }, maxLength: 9, minLength: 9 })}
            defaultValue={phone}
            type='text'
            onChange={e => setPhone(e.target.value)} />
          {errors.phone && <div className={styles.error}>Phone number must be in 000000000 format!</div>}
        </label>
        <div className={styles.buttons}>
          <Button type='submit'>Submit Order</Button>
          <Button onClick={() => action(false)}>Back to cart</Button>
        </div>
      </form>
    </div>
  );
};

ShipmentForm.propTypes = {
  action: PropTypes.func,
  cartProducts: PropTypes.array,
  message: PropTypes.string,
};

export default ShipmentForm;
