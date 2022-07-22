import React, { Component } from 'react'
import './utility.css'
import './normalize.css'
import './responsive.css'
import './style.css'
import './fonts.css'

export default function Services (){
    return (
        <>
        <section id = "services" class = "py-4">
        <div class = "container">
            <div class = "title-wrap">
                <span class = "sm-title">know about services that we offer</span>
                <h2 class = "lg-title">Our services</h2>
            </div>

            <div class = "services-row">
                <div class = "services-item">
                    <span class = "services-icon">
                        <i class = "fas fa-hotel"></i>
                    </span>
                    <h3>Luxurious Hotel</h3>
                    <p class = "text">Sip on a bottle of port wine and munch on some cashew nuts as you stay in some of finest luxury hotels in Goa on your next holiday. This beach paradise is not only famous for its sun, sand and surf but for its luxurious hotels as well that will make you want to never leave this place. From well-decorated rooms to five-star restaurants, beach shacks, luxury villas, world-class poolside decks, hospitable staff, and watersports, there is plenty to keep you on your toes at these heavenly stays.</p>

                    <a href="https://traveltriangle.com/blog/luxury-hotels-in-goa/" target="_blank" rel="noopener noreferrer">Read more</a>
                    
                </div>

                <div class = "services-item">
                    <span class = "services-icon">
                        <i class = "fas fa-map-marked-alt"></i>
                    </span>
                    <h3>Travel Guide</h3>
                    <p class = "text">Insider's travel guide to Goa contains all the information about Goa that will help you plan your entire Goa trip on your own.</p>
                    <a href = "https://thespicyjourney.com/goa-travel-guide-insiders-guide-to-goa-india/"  target="_blank" rel="noopener noreferrer">Read more</a>
                </div>


                <div class = "services-item">
                    <span class = "services-icon">
                        <i class = "fas fa-map-marked-alt"></i>
                    </span>
                    <h3>Food And Drinks</h3>
                    <p class = "text">Must Try Dishes That Exemplify Food of Goa</p>
                    <a href = "https://www.holidify.com/pages/goan-food-132.html"  target="_blank" rel="noopener noreferrer">Read more</a>
                </div>


                

                <div class = "services-item">
                    <span class = "services-icon">
                        <i class = "fas fa-money-bill"></i>
                    </span>
                    <h3>Taxi Services</h3>
                    <p class = "text">Taxis Services with State of GOA as lead to follow others, GOAMILES is run by Local GOAN Company ...</p>
                    <a href = "https://www.goamiles.com/" target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            </div>
        </div>
    </section>
    <section id = "testimonials" class = "py-4">
        <div class = "container">
            <div class = "title-wrap">
                <span class = "sm-title">what our clients say about us</span>
                <h2 class = "lg-title">testimonials</h2>
            </div>

            <div class = "test-row">
                <div class = "test-item">
                    <p class = "text">Enjoyed alot in the natural environment. Its beauty and atmosphere is worth watching. Day full of enjoyment.!</p>
                    <div class = "test-item-info">
                        <img src = "../images/Renu.jpeg" alt = "testimonial"/>
                        <div>
                            <h3>Renisha Furtado</h3>
                            <p class = "text">Trip to Dudhsagar Falls </p>
                        </div>
                    </div>
                </div>

                <div class = "test-item">
                    <p class = "text">Good beach, less crowded than the calangute or baga beach. But you need to walk a lot inside to enjoy the beach. But this beach has road side shops where you can purchase bags, clothes for a nominal price, but with a good bargain(ensure you bargain 70% lesser to the price they quote).!</p>
                    <div class = "test-item-info">
                        <img src = "../images/Aashu.jpeg" alt = "testimonial"/>
                        <div>
                            <h3>Ashwetha Dcosta</h3>
                            <p class = "text">Trip to Anjuna Beach</p>
                        </div>
                    </div>
                </div>

                <div class = "test-item">
                    <p class = "text">Fort Aguada was the most prized and crucial fort of Portuguese. The fort is so large that it envelops the entire peninsula at the southwestern tip of Bardez.!</p>
                    <div class = "test-item-info">
                        <img src = "../images/test-3.jpg" alt = "testimonial"/>
                        <div>
                            <h3>Jaura Jones</h3>
                            <p class = "text">Trip to Fort Aguada</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
};