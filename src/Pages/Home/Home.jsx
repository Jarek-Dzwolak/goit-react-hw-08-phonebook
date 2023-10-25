import React from 'react';
import styles from './Home.module.css';
import img from './img.jpg';

const Home = () => (
  <div>
    <img className={styles.responsiveImage} src={img} alt="Opis obrazka" />
  </div>
);

export default Home;
