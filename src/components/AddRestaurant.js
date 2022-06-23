




import { Container, Row, Col } from "react-bootstrap";
 import "./AddRestaurant.css"
import { Grid, InputAdornment, makeStyles, ButtonGroup, Button as MuiButton } from '@material-ui/core';
import React, { useState } from "react";
import { Modal, Button} from 'react-bootstrap';
import { Form, Alert } from "react-bootstrap"



function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
    
    <div className="btn-group">

    <button type="button" class="Addbutton" onClick={handleShow}>Add Restaurant</button>
    <button type="button" class="Addbutton" onClick={handleShow}>View Restaurant</button>
    <button type="button" class="Addbutton" onClick={handleShow}>View Users</button> 

          
        
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Restaurant</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Restaurant Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Restaurant Name" />
    </Form.Group>

   
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>PinCode</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
           
          </Modal.Footer>
        </Modal>
        </div>
      </>

    );
  }
  
  


// function Home (){
// 	return (

//           <div>
//     {/* //      <div className="p-4 box">
        
//     //  <div className="btn-group"> */}



     
// <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//   Launch demo modal
// </button>


// <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
        
     
// {/*     
//     <button type="button" class="Addbutton">Add Restaurant</button>
//     <button type="button" class="Addbutton">View Restaurant</button>
//     <button type="button" class="Addbutton">View Users</button> */}

    
    
//     </div>

    

//     )
// }

 export default Example;


