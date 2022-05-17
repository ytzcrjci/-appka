import React from 'react';
import styles from './input.module.scss';
import './input.module.scss';
import { Field } from 'formik';
import ErrorMark from '../Error-mark/error.-mark';

export default function Input(props) {
 return (
  <div className="inputContainer">
   <Field
    value={props.value}
    placeholder={props.placeholder}
    type={props.type}
    className={`${styles[props.class]}`}
    style={props.style}
    name={props.name}
    id={props.id}
   />
   <ErrorMark name={props.name}></ErrorMark>
  </div>
 );
}
