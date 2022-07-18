import React from 'react';
import styles from './FeatureBar.module.scss';

import { faMoneyBill, faPiggyBank, faGift, faTruckFast } from '@fortawesome/free-solid-svg-icons';

//import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import FeatureBox from '../../common/FeatureBox/FeatureBox';

const FeatureBar = () => (
  <div className={clsx('container', styles.root)}>
    <FeatureBox text='100% Secure Payments' icon={faMoneyBill} />
    <FeatureBox text='Money back guarantee' icon={faPiggyBank} />
    <FeatureBox text='Special gifts' icon={faGift} />
    <FeatureBox text='Worldwide shipping' icon={faTruckFast} />
  </div>
);

FeatureBar.propTypes = {
};

export default FeatureBar;
