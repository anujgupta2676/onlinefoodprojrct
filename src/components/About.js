import React from 'react';
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";



const About = () => {
    const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
    return (
        <div className="p-4 box mt-3 text-center">
            
            
            A restaurant menu app offers a digital interactive menu that users can access from their smartphones, as exemplified by Finedine. This restaurant application is a customizable SaaS solution for restaurant owners who want to digitize their ordering process and improve their customer experience.




        </div>
    );
};

export default About;