import React, { Component } from 'react'
//import './Gallery2.css'
import './utility.css'
import './normalize.css'
import './responsive.css'
import './style.css'
import './fonts.css'
//import footer from './Footer'

export default function gallery2(){
    return (
        <>
            <div id = "gallery" className = "py-4">
                <div className = "container">
                    <div className = "gallery-row">
                        <div className = "gallery-item shadow">
                            <img src = "../images/m.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className = "gallery-item shadow">
                        <img src = "../images/a1.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className = "gallery-item shadow">
                        <img src = "../images/Anjuna_beach.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className = "gallery-item shadow">
                        <img src = "../images/Cola-Beach.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className = "gallery-item shadow">
                        <img src = "../images/dona_paula_goan_travels.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className = "gallery-item shadow">
                        <img src = "../images/goa-image2.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className = "gallery-item shadow">
                        <img src = "../images/mount.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className = "gallery-item shadow">
                        <img src = "../images/o.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className = "gallery-item shadow">
                        <img src = "../images/Grande.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div id = "img-modal-box">
            <div id = "img-modal">
               
           <video src='/videos/Goa.mp4' autoPlay loop muted />  
            </div>
        </div>

        <section id = "popular" className = "py-4">
            <div className = "title-wrap">
                <span className = "sm-title">Discover More About Sightseeing & Tourist Attractions in Goa</span>
                <h2 className = "lg-title">Popular Places</h2>
            </div>

            <div className = "popular-row">
                <div className = "popular-item shadow">
                    <img src = "../images/dam.jpg" alt = ""/>
                    <div>
                        <span>Salaulim Dam</span>
                        <ul className = "rating flex">
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p className = "text">The dam lies on the Salaulim River, a tributary of Zuari River, about five kilometres from Sanguem Town. !</p>
                    </div>
                </div>

                <div className = "popular-item shadow">
                    <img src = "../images/cruises-in-goa.jpg" alt = ""/>
                    <div>
                        <span>Cruise in Goa </span>
                        <ul className = "rating flex">
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;440 reviews</li>
                        </ul>
                        <p className = "text">Cruise in Goa allows one to explore the exotic scenery, pristine waters and marvel the breathtaking view of the sunset.!</p>
                    </div>
                </div>

                <div className = "popular-item shadow">
                    <img src = "../images/water.jpg" alt = ""/>
                    <div>
                        <span>Water sports in Goa</span>
                        <ul className = "rating flex">
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;300 reviews</li>
                        </ul>
                        <p className = "text">Goa is a haven for water sports like kneeboarding, kite surfing, snorkelling, parasailing, paragliding, diving, and kayaking. !</p>
                    </div>
                </div>

                <div className = "popular-item shadow">
                    <img src = "../images/Thalasa.jpg" alt = ""/>
                    <div>
                        <span>Thalassa</span>
                        <ul className = "rating flex">
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;1000 reviews</li>
                        </ul>
                        <p className = "text">Thalassa- The Greek Taverna is one of the most popular restaurants in Goa.!</p>
                    </div>
                </div>

                <div className = "popular-item shadow">
                    <img src = "../images/Divar.jpg" alt = ""/>
                    <div>
                        <span>Divar Island</span>
                        <ul className = "rating flex">
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;200 reviews</li>
                        </ul>
                        <p className = "text">Divar Island is a slice of heaven tucked away in dense woods amidst the beauty of nature. Connected to Old Goa only through ferry service, this island is synonymous with natural beauty, serenity and tranquillity.!</p>
                    </div>
                </div>

                <div className = "popular-item shadow">
                    <img src = "../images/church.jpg" alt = ""/>
                    <div>
                        <span>Our Lady of Immaculate Conception</span>
                        <ul className = "rating flex">
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;800 reviews</li>
                        </ul>
                        <p className = "text">Located in Panjim, Our Lady of Immaculate Conception is one of the oldest chapels in Goa. !</p>
                    </div>
                </div>

                <div className = "popular-item shadow">
                    <img src = "../images/bu.jpg" alt = ""/>
                    <div>
                        <span>Butterfly Beach</span>
                        <ul className = "rating flex">
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;700 reviews</li>
                        </ul>
                        <p className = "text">A hidden land of adventure, peppered with some stunning views & aquatic life; that’s Butterfly Beach for you!</p>
                    </div>
                </div>

                <div className = "popular-item shadow">
                    <img src = "../images/tito.jpg" alt = ""/>
                    <div>
                        <span>Titos nightclub</span>
                        <ul className = "rating flex">
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;900 reviews</li>
                        </ul>
                        <p className = "text">Titos nightclub is one of the top things to do in Goa for most tourists. Located in Calangute, Tito's is one of the most famous nightclubs in Goa.  </p>
                    </div>
                </div>
            </div>
        </section>
        <footer/>
    </>        
)};


