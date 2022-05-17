import { useEffect } from 'react';

const url = 'http://localhost:8091/api';

const login = async (login, password) => {
 console.log('login: ', login, ', password: ', password);
 return fetch(url + '/login', {
  method: 'POST',
  headers: {
   Accept: 'application/json',
   'Content-Type': 'application/json',
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify({
   login,
   password,
  }),
 }).then(async (response) => {
  if (response.ok) {
   console.log('the login response', response);
   return response.json().then((data) => {
    localStorage.setItem('token', JSON.stringify(data));
   });
  } else {
   alert('Invalid Username or Password');
   window.stop();
  }
 });
};

const getCurrentUser = async () => {
 // useEffect(() => {})
 await fetch(url + '/me', {
  method: 'GET',
  headers: {
   Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
   Accept: 'application/json',
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Credentials': true,
   'Content-Type': 'application/json',
  },
 }).then((res) => {
  if (res.ok) {
   res.json().then((data) => {
    console.log('The token is: ' + localStorage.getItem('token'));
    console.log('The username is: ' + data.username);
    localStorage.setItem('username', JSON.stringify(data.username));
   });
  } else {
   console.log('No Data! Go and log in!!');
  }
 });
};

const logout = () => {
 alert('Trwa wylogowywanie');
 localStorage.removeItem('token');
 localStorage.removeItem('username');
 localStorage.clear();
};

const authService = {
 login,
 logout,
 getCurrentUser,
};

export default authService;
