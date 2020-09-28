import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Title.css';

function Title() {
    const [button, setButton] = useState(true);

    return(
        <div className='title-container'>
            <h1 className='title-container__title'>My Five Hours</h1>
            <p className='title-container__subtitle'>Be the best possible you</p>
            <div className='title-container__btns'>
                <Link to='/sign-in' className='title-container__btn'>
                    {/* <Button variant="outlined" color="primary" size="large">SIGN IN</Button> */}
                    <Button variant="outlined" color="primary" size="large">SIGN IN</Button>
                </Link>
                <Link to='/sign-up' className='title-container__btn'>
                    <Button variant="outlined" color="primary" size="large">SIGN UP</Button>
                </Link>
            </div>
        </div>
    )
}

export default Title;