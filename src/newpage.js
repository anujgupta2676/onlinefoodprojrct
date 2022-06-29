import React from "react";
import ReactDOM from 'react-dom';





const BASE_URL = 'http://localhost:44357/api/';



export const ENDPIONTS = {
    // CUSTOMER: 'Customer',
    // FOODITEM: 'FoodItem',
    // ORDER: 'Order'
    RESTAURANT:'AddRestaurants'

}


class CustomerComponent extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
        customers: []
        
    };
}


render()
{
    return (
        <div>
            <h2>Customer Data...</h2>

            {this.state.customers.map(cust => (
                <ol key={cust.restaurantId}>
                    <li>{cust.restaurantName}</li>
                </ol>

            ))}
        </div>


    );
}



componentDidMount() {
    fetch("https://localhost:44357/api/AddRestaurants")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    customers: result
                });
                console.log("hello");
            }
        );
    }
    
}
export default CustomerComponent ;
