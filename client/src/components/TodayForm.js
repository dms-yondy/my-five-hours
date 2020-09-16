import React from 'react'
import {useForm} from 'react-hook-form'
import {Button, TextField} from '@material-ui/core';
import './TodayForm.css'

function TodayForm() {
    const {resigster, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form className="todayForm" onSubmit={handleSubmit(onSubmit())}>
            <div className="form--element">
                <label for="topic">What topic did you learn about today?</label>
                <TextField id="topic" label="" variant="outlined" ref={resigster}/>
            </div>
            <div className="form--element">
                <label for="content">What specifically did you learn?</label>
                <TextField id="content" label="" variant="outlined" ref={resigster}/>
            </div>
            <div className="form--element">
                <label for="takeaway">What did you think you gained by learning this topic today?</label>
                <TextField id="takeaway" label="" variant="outlined" ref={resigster}/>
            </div>
            <div className="form--button">
                <Button variant="outlined" color="primary">SUBMIT</Button>
            </div>
        </form>
    );
}

export default TodayForm;