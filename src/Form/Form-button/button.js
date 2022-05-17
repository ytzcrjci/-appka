import React from 'react';
import './button.module.scss';
import styles from './button.module.scss';
import { Field } from 'formik';

export default function Button(props) {
 return (
  <button
   className={`${styles[props.class]}`}
   type="submit"
   style={props.style}
   onClick={props.onClick}
  >
   {props.txt}
  </button>
 );
}
