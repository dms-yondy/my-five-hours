import React, {useState} from 'react';
import {Button} from './Button';
import './Title.css';

function Title() {
    const [button, setButton] = useState(true);

    return(
        <div className='title-container'>
            <h1 className='title-container__title'>My Five Hours</h1>
            <p className='title-container__subtitle'>Be the best possbile you</p>
            <div className='title-container__btns'>
                {button && <Button buttonStyle='btn--primary'>SIGN UP</Button>}
            </div>
        </div>
    )
}

export default Title;