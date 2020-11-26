import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Title.css';

function Title() {
    const [button, setButton] = useState(true);

    return(
        <div className='title-container'>
            <div className='title-container__text'>
                <h1 className='title-container__title'>My Five Hours</h1>
                <p className='title-container__subtitle'>Be the best possible you</p>
                <div className='title-container__btns'>
                    <Link to='/sign-up' className='title-container__btn'>
                        <Button variant="outlined" color="primary" size="large">Start Your Journey Today</Button>
                    </Link>
                </div>
            </div>
            <div className='title-container__image__container'>
                <img className='title-container__image__container__image' src='https://production-tcf.imgix.net/app/uploads/2020/05/06145036/halley_covidsummer-012.png?auto=format%2Ccompress&q=80&fit=crop&w=1200&h=600' />
            </div>
        </div>
    )
}

export default Title;