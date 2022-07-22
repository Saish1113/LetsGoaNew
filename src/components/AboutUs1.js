import React from 'react';
import './AboutUs1.css';
import VMC from './Vmc';
import Footer from './Footer'

function AboutUS1() {
    return (
        <div id="abt_1">
            <section className="py-4 bg-info">
                <div className="container">
                <div className="row">
                    <div className="col-md-4 my-auto">
                        <h4> About US </h4>
                        </div>
                        <div className="col-md-8 my-auto">
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-c-light border-bottom">
                <div className="container">
                    <h5 className="main-heading">TRAVEL AND TOURISM WEBSITE
</h5>
                    <div className="underline"></div>
                    <p>
                    The ‘Lets Goa :Goa Trip Planner” has been developed to override the problems 
                    prevailing in the practicing manual system.This web application is designed to 
                    provide an information management system which is tourism relevant , well structured 
                    and high satisafaction to user experience.
                    </p>
                </div>
            </section>

            {/* Our Vision Mission and values */}
            <VMC />
            <Footer/>


        </div>

);
}



    export default AboutUS1;