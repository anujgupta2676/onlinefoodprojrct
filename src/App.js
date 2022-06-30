import React from "react";


import { Routes, Route } from "react-router-dom";
//import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PhoneSignUp from "./components/PhoneSignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Homme from "./Homme";
import TopNav from './components/TopNav';
import Startie from "./components/Startie";
import AdminLogin from './components/AdminLogin';
import AddRestaurant from "./components/AddRestaurant";



import CustomerComponent from "./newpage";


const url = "https://localhost:44357/api/AddRestaurants";

function App() {

  return ( 
  <div>
      
 <TopNav/> 



      
            <UserAuthContextProvider>
            <Routes>
           <Route path="/" element={<Startie/>} /> 
               <Route path="/Homme"element={ <ProtectedRoute><Homme/></ProtectedRoute>}/>
              <Route path="/Login" element={<Login />} /> 
              <Route path="/AddRestaurant" element={<ProtectedRoute><AddRestaurant/></ProtectedRoute>} />  
              <Route path="/AdminLogin" element={<AdminLogin/>} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/phonesignup" element={<PhoneSignUp />} />
              <Route path = '/LOGOUT' element = {<ProtectedRoute><Home/></ProtectedRoute>}/>
              <Route path = '/About' element = {<About/>}/>
              <Route path = '/Contact' element = {<Contact/>}/> 
          
         
            </Routes>
          </UserAuthContextProvider>
      
    
      </div>
  );
}

export default App;
