import React from 'react';
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Contact = () => {
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
            
            
            When you think of excellent website design, you probably think about the homepage, blog, or product pages. But what about a website's Contact Us page?

Far too many website designers put contact pages near the bottom of their priority list in terms of copywriting and design. It’s no wonder that many contact pages look like they were built in the 1990s, while the rest of the website is beautiful and updated.
<p>CONTACT-909876542</p>
<p>FACEBOOK-www/facebook/223344/http/EatFlex</p>
<p>Mail US -EatFlex99@gmail.com</p>



        </div>
    );
};

export default Contact;