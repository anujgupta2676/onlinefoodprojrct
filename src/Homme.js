//import logo from './logo.svg';
import './Homme.css';
import { Container, Typography } from "@material-ui/core";
import Order from "./componentNew/Order";

import { useNavigate } from "react-router";
import { useUserAuth } from "./context/UserAuthContext";


function Homme() {
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
     
  
    <Container style={{ width: "900px" }}>
   
    
      <Typography
      gutterBottom
      variant="h2"
      align ="center">
      
      </Typography>
      <Order />
    </Container>
    
  );
}

export default Homme;
