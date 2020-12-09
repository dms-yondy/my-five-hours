import React from 'react';
import './Home.css';


function Home() {
    return (
        <div className="home-container">
            <div className="home-container-content">
                <h1 className="home-container__title">My Five Hours</h1>
                <p className="home-container__tagline">Spend the time to be the best possible you</p>
                <button className="home-container__button" type='button'>SIGN UP</button>
            </div>
        </div>
    )
}

export default Home;