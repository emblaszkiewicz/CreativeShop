import React from 'react';
import styles from './AboutLayout.module.scss';
import { useSelector } from 'react-redux';

import { faServer, faBoxOpen, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

//import PropTypes from 'prop-types';
import clsx from 'clsx';

import { getAllEmployees } from '../../../../src/redux/employeesRedux.js';

import AboutBox from '../../common/AboutBox/AboutBox';
import WorkerBox from '../../common/WorkerBox/WorkerBox';

const AboutLayout = () => {

  const employees = useSelector(getAllEmployees);

  return (
    <div className={clsx('container', styles.root)}>
      <div className={styles.row}>
        <div className={styles.headText}>
          <span>About our online store</span>
          <h3>Hello, <br />With 25+ years of experience</h3>
          <p>Praesent auctor pharetra risus, quis sagittis nulla efficitur quis. In pretium vitae.</p>
          <p>Maecenas rutrum blandit leo, sit amet pretium tortor convallis at. Nulla feugiat turpis ac quam pulvinar, pellentesque porttitor diam condimentum. Etiam bibendum dolor sit amet dapibus posuere. Donec eget magna luctus, fringilla urna at, malesuada purus. Class aptent taciti sociosqu ad litora torquent per.</p>
        </div>
        <img className={styles.headImage} src='../../images/AboutPage/meeting.webp' alt='meeting' />
      </div>
      <div className={styles.row}>
        <div className={styles.headText}>
          <h3>We and our clients are happy to cooperate with our company</h3>
          <div className={styles.subTitle}>Our features</div>
        </div>
      </div>
      <div className={styles.row}>
        <AboutBox
          icon={faServer}
          title='Our Vision'
          text='Sed molestie auctor nisi, ut porta ex condimentum eget. Etiam velit nibh, gravida eget ligula vitae, sodales fringilla.' />
        <AboutBox
          icon={faBoxOpen}
          title='History of beginning'
          text='Proin viverra, lacus sit amet tincidunt lobortis, turpis nibh vestibulum eros, nec pulvinar lorem nisi vel mauris. Suspendisse.' />
        <AboutBox
          icon={faLayerGroup}
          title='What we really do?'
          text='Morbi sed tempor odio, sit amet aliquet leo. In vel lobortis elit, sed lobortis nunc. Vestibulum tristique laoreet.' />
      </div>
      <div className={styles.row}>
        <div className={styles.headText}>
          <h3>Our best projects</h3>
          <div className={styles.subTitle}>How it works</div>
        </div>
      </div>
      <div className={styles.row}>
        <img className={styles.headImage} src='../../images/AboutPage/meeting1.webp' alt='meeting1' />
        <img className={styles.headImage} src='../../images/AboutPage/meeting1.webp' alt='meeting2' />
      </div>
      <div className={styles.row}>
        <div className={styles.headText}>
          <h3>Our workalbe team</h3>
          <div className={styles.subTitle}>Best team</div>
        </div>
      </div>
      <div className={styles.row}>
        {employees.map(employee =>
          <WorkerBox key={employee._id} {...employee} />
        )}
      </div>
    </div>
  );
};
AboutLayout.propTypes = {
};

export default AboutLayout;
