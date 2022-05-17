import React from 'react';
import { ErrorMessage } from 'formik';

const ErrorMark = (props) => {
 return (
  <ErrorMessage name={props.name}>
   {(errMessage) => {
    return <div style={{ color: 'rgb(300, 0, 0)' }}>{errMessage}</div>;
   }}
  </ErrorMessage>
 );
};

export default ErrorMark;
