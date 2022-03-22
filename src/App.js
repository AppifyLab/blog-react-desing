import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TeacherSignIn from './LoginRegister/TeacherSignIn';
import Registration from './LoginRegister/Registration';
import Dashboard from './Pages/Dashboard';
import Users from './Pages/Users';
import Category from './Pages/Category';
import Subcategory from './Pages/Subcategory';
function App() {
  return (
    <BrowserRouter> 
      <Routes>                
        <Route path="/" element={<Dashboard />} />       
        <Route path="/teachersignin" element={<TeacherSignIn />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/users" element={<Users />} />
        <Route path="/category" element={<Category />} />
        <Route path="/subcategory" element={<Subcategory />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
