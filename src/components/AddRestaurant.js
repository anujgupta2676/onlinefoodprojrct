import { Container, Row, Col } from "react-bootstrap";
import "./AddRestaurant.css"
import { Grid, InputAdornment, makeStyles, ButtonGroup, Button as MuiButton } from '@material-ui/core';
import { Modal, Button } from 'react-bootstrap';
import { Form, Alert } from "react-bootstrap"
import Table from "../layouts/Table";
import axios from "axios";
import React, { useState, useEffect } from 'react'
import { TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { createAPIEndpoint1, ENDPIONTS1 } from "../api/index1";

function Example(props) {

    const url="https://localhost:44357/api/AddRestaurants"
    const url2="http://localhost:44348/api/Customer"

    const[data,setData]=useState({


     
        restaurantName: "",
        address: "",
        city: "",
        pincode: "",
        customerName:""
        

    });

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            
            restaurantName: data.restaurantName,
            address: data.address, 
            city: data.city,
            pincode: data.pincode
        })
        .then(res=>{console.log(res.data)})
        axios.post(url2,{
            
            customerName: data.restaurantName,
            
        })
        .then(res=>{console.log(res.data)})
    }

    function handle(e){

        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)

    }
    

    const { values, setValues,setErrors } = props;
    const [notify, setNotify] = useState({ isOpen: false })


    

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    

    const [customerList2, setCustomerList2] = useState([])
    
    useEffect(() => {
        createAPIEndpoint1(ENDPIONTS1.ADDRESTAURANT).fetchAll()
            .then(res => {setCustomerList2(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const validateForm = () => {
        let temp = {};
        temp.restaurantId = values.restaurantId != 0 ? "" : "This field is required.";
        setErrors({ ...temp });
        return Object.values(temp).every(x => x === "");
    }

    const submitOrder1 = e =>
     {
        e.preventDefault();
        if (validateForm()) 
            if (values.restaurantId == 0) {
                createAPIEndpoint1(ENDPIONTS1.ADDRESTAURANT).create(values)
                    .then(res => {
                
                        setNotify({ isOpen: true, message: 'New restaurant is added.' });
                    })
                    .catch(err => console.log(err));
            }
        }




    return (
        <>

            <div className="btn-group">

                <button type="button" class="Addbutton" onClick={handleShow}>Add Restaurant</button>
                <button type="button" class="Addbutton" onClick={handleShow1}>View Restaurant</button>
                

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

                        <Form onSubmit={(e)=>submit(e)}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Restaurant Name</Form.Label>
                                    <Form.Control onChange={(e)=> handle(e)} id="restaurantName" value={data.restaurantName} placeholder="Enter Restaurant Name" />
                                
                                </Form.Group>


                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
    
                                <Form.Control onChange={(e)=> handle(e)} id="address" value={data.address} placeholder="building block house no." />
                            </Form.Group>



                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control onChange={(e)=> handle(e)} id="city" value={data.city} />
                                    
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>PinCode</Form.Label>
                                    <Form.Control onChange={(e)=> handle(e)} id="pincode" value={data.pincode} />
                                    
                                
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={handleClose}>
                                submit
                            </Button>
                        </Form>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>

                {/* Modal for 2ND BUTTON VIEW RESTAURANT */}

               <Modal
                    show={show1}
                    onHide={handleClose1}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Restaurant</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>RestaurantId</TableCell>
                        <TableCell>RestaurantName</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>PinCode</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        customerList2.map(item => (
                            <TableRow key={item.restaurantId}>
                                <TableCell
                                    Value={item.restaurantId}>
                                    {item.restaurantId}
                                </TableCell>
                                <TableCell
                                    Value={item.restaurantName}>
                                    {item.restaurantName}
                                </TableCell>
                                <TableCell Value={item.address}>{item.address}</TableCell>

                                <TableCell
                                    Value={item.pincode}>
                                    {item.pincode}
                                </TableCell>

                               
                                
                               
                            </TableRow>
                        ))
                    }
                </TableBody>
                
            </Table>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose1}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
           
        
            </div>
            
        </>

    );
}


export default Example;


