import { Field, useField } from 'formik';
import React from 'react';
import './checkbox.module.scss';
import styles from './checkbox.module.scss';
import ErrorMark from '../Error-mark/error.-mark';

export default function Checkbox() {
 return (
  <div>
   <div className={styles.checkbox}>
    <div className={styles.rememberMe}>
     <Field
      name="toggle"
      type="checkbox"
      id="remember"
      className={styles.remember}
      required
     ></Field>
     <label htmlFor="remember">Zapamiętaj mnie</label>
    </div>
    <div>Zapomniałeś hasła?</div>
   </div>
   <ErrorMark name="toggle"></ErrorMark>
  </div>
 );
}
