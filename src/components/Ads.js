import React from 'react';
import { useStyles } from '../styles';

export default function Ads() {
  const styles = useStyles();
  var adsImgs = [];
  adsImgs[0] = <img src='/images/Ad1.jpg' alt='Uber Eats Ad' className={styles.image}></img>
  adsImgs[1] = <img src='/images/ad2.jpg' alt='Salad Ad' className={styles.image}></img>;
  adsImgs[2] = <img src='/images/ad3.jpg' alt='BreakFast Ad' className={styles.image}></img>;
  var index = 0;
  index = Math.floor(Math.random() * adsImgs.length);
  return (adsImgs[index]);
}
