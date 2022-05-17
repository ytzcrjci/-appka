// https://stackoverflow.com/questions/58332634/how-can-i-get-the-name-of-the-current-user-from-the-json-web-token
//https://www.codementor.io/@obabichev/react-token-auth-12os8txqo1
//https://developer.okta.com/blog/2019/10/02/jwt-react-auth
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import authService from '../../api/auth-service';
import Button from '../../Form/Form-button/button';
import styles from './dashboard.module.scss';
import './dashboard.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
 const navigate = useNavigate();
 //  useEffect(() => {
 //   window.onload = authService.getCurrentUser();
 //  });
 function doNotClick() {
  authService.getCurrentUser();
  alert('Youe are not logged in! Access denied!');
 }
 function click() {
  authService.getCurrentUser();
  alert('Your are logged in! Congrats! go to CONSOLE');
 }
 function nav() {
  navigate('/');
 }
 function logoutting() {
  authService.logout();
  window.location.reload();
 }
 return (
  <div className={styles.container}>
   {localStorage.getItem('token') ? (
    <button onClick={click}>Click to get info</button>
   ) : (
    <button onClick={doNotClick}>DON'T CLICK!</button>
   )}
   <h1>Dashboard</h1>
   <div className="info">
    {localStorage.getItem('token') ? (
     <div>
      Witaj! Jestes zalogowany jako: {localStorage.getItem('username')}
      <div className={styles.logout}>
       <Button txt="Wyloguj się" class="button" onClick={logoutting} />
      </div>
     </div>
    ) : (
     <div>
      Nie jestes zlogowany. Zaloguj się!
      <div className={styles.logout}>
       <Button txt="Zaloguj się" onClick={nav} class="button" />
       Lub
       <Button txt="Zarejestruj się" onClick={nav} class="button-res" />
      </div>
     </div>
    )}
   </div>
  </div>
 );
}
