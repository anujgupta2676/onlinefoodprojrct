import React from 'react'
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpeg'
import user3 from './images/user3.jpeg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img6 from './images/img6.jpg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Delicious Food We Serve</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={img3} alt='user1'/>
                        <p>Veggie pizza toppings like mushrooms and fresh tomato also contain copious amounts of glutamate.

Along with the glutamate, during the pizza cooking process, the maillard reaction brings forward the flavor compounds that give pizza its distinct flavor. </p>
                        <p><span>HUNGRY HOWIES</span></p>
                        <p>Restaurant at Pune</p>
                    </div>
                    <div className='card'>
                        <img src={img4} alt='user1'/>
                        <p>Add the egg and the beer to the dry ingredients and whisk until smooth and combined; the batter should be thicker than pancake batter, more like a thin cake batter.Every meal at Kazu should start with an order of takoyaki. </p>
                        <p><span>SWEET AND SUGAR</span></p>
                        <p>Restaurant at Delhi </p>
                    </div>
                    <div className='card'>
                        <img src={img6} alt='user1'/>
                        <p>fish fry or diamond fry in Calcutta is a crumb-coated fillet of bhetki—something that would be called a fish cutlet elsewhere. Fish fry is served by cabin-style restaurants, small take-away shops, street food vendors.</p>
                        <p><span>BONGS KITCHEN</span></p>
                        <p>Restaurant at Kolkata</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
