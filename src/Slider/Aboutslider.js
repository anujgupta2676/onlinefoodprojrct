import React from 'react'
import chef from './images/chef.jpg'
import './Aboutslider.css'

const Aboutslider = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={chef} width={500} height={500} alt='chef' />
                <div >
                    <h2>About US</h2>
                    <span ></span>
                   <h5> <p>Building the best restaurant website doesn’t have to be a time-consuming or difficult task. In many cases, there are simple things you can build into your website to share the most important information with your frequent and potential guests, especially as a way to direct customer traffic to online ordering. 

A great restaurant website supports all of your restaurant marketing activities: it can attract new customers, maintain loyal ones, and raise the overall profile of the establishment outside of the physical location. It's a crucial aspect of running a successful business. 

As you work to create a restaurant website, keep customer data in mind. Gathering, and using, customer data in the right way can maximize your ability to attract, retain, and deepen the connection with your guests. </p></h5>
                   <h5><p>We EatFlex,believe in excellence service,premimum quality food.</p></h5>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default Aboutslider
