import React from 'react'
import "./Card.css"
import CardItems from './CardItems'


function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>

            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems 
                        src = "Images/img-9.jpg"
                        text= "Explore the hidden waterfall in Amazon jungle"
                        lable="Adventure"
                        path="/services"
                        />
                        

                        <CardItems 
                        src = "Images/img-2.jpg"
                        text= "Travel through the Island of Maldives by private Cruise"
                        lable="Travel Luxury"
                        path="/services"
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItems 
                        src = "Images/img-3.jpg"
                        text= "Set Sail in atlantic ocean visiting Uncharted Water"
                        lable="Mystery"
                        path="/services"
                        />
                        

                        <CardItems 
                        src = "Images/img-4.jpg"
                        text= "Experience footbal on the Top of Himalayan Mountains"
                        lable="Adveture"
                        path="/services"
                        />

                        <CardItems 
                        src = "Images/img-8.jpg"
                        text= "Ride through the Sahara Desert on a Guided camel tour"
                        lable="Travel Luxury"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards 
