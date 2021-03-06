import React, { useState, useEffect } from 'react'
import Form from "../../layouts/Form";
import { Grid, InputAdornment, makeStyles, ButtonGroup, Button as MuiButton } from '@material-ui/core';
import { Input, Select, Button } from "../../controls";
import ReplayIcon from '@material-ui/icons/Replay';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ReorderIcon from '@material-ui/icons/Reorder';
import { createAPIEndpoint, ENDPIONTS } from "../../api";
import { createAPIEndpoint1, ENDPIONTS1 } from "../../api/index1";
import { roundTo2DecimalPoint } from "../../utils";
import Popup from '../../layouts/Popup';
import OrderList from './OrderList';
import Notification from "../../layouts/Notification";
import axios from 'axios';

const pMethods = [
    { id: 'none', title: 'Select' },
    { id: 'Cash', title: 'Cash' },
    { id: 'Card', title: 'Card' },
]

const useStyles = makeStyles(theme => ({
    adornmentText: {
        '& .MuiTypography-root': {
            color: '#f3b33d',
            fontWeight: 'bolder',
            fontSize: '1.5em'
        }
    },
    submitButtonGroup: {
        backgroundColor: '#f3b33d',
        color: '#000',
        margin: theme.spacing(1),
        '& .MuiButton-label': {
            textTransform: 'none'
        },
        '&:hover': {
            backgroundColor: '#f3b33d',
        }
    }
}))

export default function OrderForm(props) {
    axios.get("https://localhost:44357/api/AddRestaurants")

    const { values, setValues, errors, setErrors,
        handleInputChange, resetFormControls } = props;
    const classes = useStyles();

    const [customerList, setCustomerList] = useState([]);
    const [customerList1, setCustomerList1] = useState([]);
    const [orderListVisibility, setOrderListVisibility] = useState(false);
    const [orderId, setOrderId] = useState(0);
    const [notify, setNotify] = useState({ isOpen: false })

     useEffect(() => {
         createAPIEndpoint(ENDPIONTS.CUSTOMER).fetchAll()
             .then(res => {
                 let customerList = res.data.map(item => ({
                     id: item.customerID,
                     title: item.customerName
                 }));
                 customerList = [{ id: 0, title: 'Select' }].concat(customerList);
                 setCustomerList(customerList);
             })
             .catch(err => console.log(err))
     }, [])

    

     useEffect(() => {
        createAPIEndpoint1(ENDPIONTS1.ADDRESTAURANT).fetchAll()
            .then(res => {
                let customerList1 = res.data.map(item => ({
                    id: item.restaurantId,
                    title: item.restaurantName
                   

                }));
                customerList1 = [{ id: 0, title: 'Select' }].concat(customerList1);
                setCustomerList1(customerList1);
            })
            .catch(err => console.log(err))
    }, [])


    useEffect(() => {
        let gTotal = values.orderDetails.reduce((tempTotal, item) => {
            return tempTotal + (item.quantity * item.foodItemPrice);
        }, 0);
        setValues({
            ...values,
            gTotal: roundTo2DecimalPoint(gTotal)
        })

    }, [JSON.stringify(values.orderDetails)]);


    
    useEffect(() => {
        if (orderId == 0) resetFormControls()
        else {
            createAPIEndpoint(ENDPIONTS.ORDER).fetchById(orderId)
                .then(res => {
                    setValues(res.data);
                    setErrors({});
                })
                .catch(err => console.log(err))
        }
    }, [orderId]);

    const validateForm = () => {
        let temp = {};
        temp.customerId = values.customerId != 0 ? "" : "This field is required.";

        temp.restaurantId = values.restaurantId != 0 ? "" : "This field is required.";


        temp.pMethod = values.pMethod != "none" ? "" : "This field is required.";
        temp.orderDetails = values.orderDetails.length != 0 ? "" : "This field is required.";
        setErrors({ ...temp });
        return Object.values(temp).every(x => x === "");
    }

    const resetForm = () => {
        resetFormControls();
        setOrderId(0);
    }

    const submitOrder = e => {
        e.preventDefault();
        if (validateForm()) {
            if (values.orderMasterId == 0) {
                createAPIEndpoint(ENDPIONTS.ORDER).create(values)
                    .then(res => {
                        resetFormControls();
                        setNotify({ isOpen: true, message: 'New order is created.' });
                    })
                    .catch(err => console.log(err));
            }
            else {
                createAPIEndpoint(ENDPIONTS.ORDER).update(values.orderMasterId, values)
                    .then(res => {
                        setOrderId(0);
                        setNotify({ isOpen: true, message: 'The order is updated.' });
                    })
                    .catch(err => console.log(err));
            }
        }

    }

    const openListOfOrders = () => {
        setOrderListVisibility(true);
    }

    return (
        <>
            <Form onSubmit={submitOrder}>
                <Grid container>
                    <Grid item xs={6}>
                        <Input 
                             
                            disabled
                            label ="Order Number"
                            name="orderNumber"
                            value={values.orderNumber}
                            InputProps={{
                                startAdornment: <InputAdornment
                                    className={classes.adornmentText}
                                    position="start">#</InputAdornment>
                            }}
                        />
                         <Select
                            label="Restaurants"
                            name="customerId"
                            value={values.customerId}
                            onChange={handleInputChange}
                            options={customerList}
                            error={errors.customerId}
                        />  
                          <Select
                            label="Confirm Restaurants"
                            name="restaurantId"
                            value={values.restaurantId}
                            onChange={handleInputChange}
                            options={customerList1}
                            error={errors.restaurantId}
                        />  

                         
                        

                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            label="Payment Method"
                            name="pMethod"
                            value={values.pMethod}
                            onChange={handleInputChange}
                            options={pMethods}
                            error={errors.pMethod}
                        />
                        <Input
                            disabled
                            label="Grand Total"
                            name="gTotal"
                            value={values.gTotal}
                            InputProps={{
                                startAdornment: <InputAdornment
                                    className={classes.adornmentText}
                                    position="start">???</InputAdornment>
                            }}
                        />
                        <ButtonGroup className={classes.submitButtonGroup}>
                            <MuiButton
                                size="large"
                                endIcon={<RestaurantMenuIcon />}
                                type="submit">Submit</MuiButton>
                            <MuiButton
                                size="small"
                                onClick={resetForm}
                                startIcon={<ReplayIcon />}
                            />

                        
                        </ButtonGroup>
                        <Button
                            size="large"
                            onClick={openListOfOrders}
                            startIcon={<ReorderIcon />}
                        >Orders</Button>
                    </Grid>
                </Grid>
            </Form>
            <Popup
                title="List of Orders"
                openPopup={orderListVisibility}
                setOpenPopup={setOrderListVisibility}>
                <OrderList
                    {...{ setOrderId, setOrderListVisibility, resetFormControls, setNotify }} />
            </Popup>
            <Notification
                {...{ notify, setNotify }} />
        </>
    )
}
