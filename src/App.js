import './App.css';
import Login from './Pages/Login/login';
import Dashboard from './Pages/Dashboard/dashboard';
import { Route, Routes } from 'react-router-dom';

function App() {
 return (
  // <Login />
  <Routes>
   <Route path="/" element={<Login />} />
   <Route path="dashboard" element={<Dashboard />} />
  </Routes>
 );
}

export default App;
