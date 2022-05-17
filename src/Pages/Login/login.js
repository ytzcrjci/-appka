import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { string, boolean } from 'yup';
import { useNavigate } from 'react-router-dom';
import authService from '../../api/auth-service';

import styles from './login.module.scss';
import './login.module.scss';

import Input from '../../Form/Form-inputs/input';
import Button from '../../Form/Form-button/button';
import Checkbox from '../../Form/Form-checkbox/checkbox';

export default function Login() {
 const SignupSchema = Yup.object().shape({
  login: string().required('Login is required!'),
  password: string().required('Password is required!'),
  toggle: boolean().required('Must agree').isTrue('Must agree'),
 });

 const navigate = useNavigate();
 //  useEffect(() => {
 //   authService.getCurrentUser();
 //   window.location.reload();
 //  });
 return (
  <div className={styles.fullContainer}>
   <div className={styles.loginBox}>
    <div className={styles.logo}>
     {/* <img src={require('../../../src/images/house.png')} width="100px" /> */}
     <a href='https://www.flaticon.com/free-icon/house_3845763?related_id=3845763&origin=pack'><img src={require('../../../src/images/house.png')} width="100px" /></a>
    </div>
    <div className={styles.title}>Zaloguj się do aplikacji</div>
    <hr className={styles.hr} />
    <div className={styles.formSection}>
     <Formik
      enableReinitialize={true}
      novalidate
      autocomplete="off"
      initialValues={{
       login: '',
       password: '',
       toggle: true,
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
       console.log(
        'console login: ',
        values.login,
        ', console  password: ',
        values.password
       );
       authService.login(values.login, values.password).then(async (data) => {
        // localStorage.setItem('token', JSON.stringify(data));
        // console.log(JSON.stringify(data));
        navigate('/dashboard');
        authService.getCurrentUser();
       });
      }}
     >
      {({ values, handleBlur, handleChange }) => (
       <Form noValidate autoComplete="off" method="get">
        <Input
         type="text"
         id="login"
         name="login"
         value={values.login}
         onChange={handleChange}
         onBlur={handleBlur}
         placeholder="login"
         class="loginInputLogin"
        />
        <Input
         type="password"
         id="password"
         name="password"
         value={values.password}
         onChange={handleChange}
         onBlur={handleBlur}
         class="loginInputPassword"
         placeholder="&#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679;"
         style={{ margin: '25px 0 0 0' }}
        />
        <Checkbox onChange={handleChange} onBlur={handleBlur} required />
        <Button
         txt="Zaloguj sie"
         class="button"
         style={{ margin: '49px 0 37px 0' }}
        />
        <div className={styles.b}>
         Lub zaloguj się przez
         <img
          src={require('../../../src/images/iconFacebook.png')}
          alt="Login with Facebook"
         />
         <img
          src={require('../../../src/images/iconGoogle.png')}
          alt="Login with Google"
         />
        </div>
       </Form>
      )}
     </Formik>
    </div>
   </div>
  </div>
 );
}
