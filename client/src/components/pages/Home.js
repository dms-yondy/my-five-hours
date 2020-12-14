import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './../Button';
import './Home.css';


function Home() {
    return (
        <div className="home-container">
            <div className="home-container-content">
                <h1 className="home-container__title">My Five Hours</h1>
                <p className="home-container__tagline">Spend the time to be the best possible you</p>
                <div className="home-container__button">
                <Link to="/signup">
                    <Button>SIGN UP</Button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;