import React, {useState, useEffect} from 'react'
import {Button, makeStyles, TextField} from '@material-ui/core';
import './TodayForm.css'
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({

    todayForm: {
        backgroundColor: red
        // display: "flex",
        // flexDirection: "column",
        // textAlign: "center",
        // justifySelf: "center",
        // justifyContent: "center",
        // margin: "0 auto"
    },
    // formElement: {
    //     display: flex,
    //     flexDirection: column,
    //     justifyItems: center,
    //     margin: "2em"
    // },
    // formButton: {
    //     display: flex,
    //     justifyContent: center
    // }
});

const initialValue = {
    key: 0,
    date : new Date(),
    topic: "",
    learnt: "",
}

function TodayForm() {

    const [values, setValues] = useState(initialValue);
    const styles = useStyles()


    return (
        <form className={styles.todayForm}>
            <div className="form--element">
                <label for="topic">What topic did you learn about today?</label>
                <TextField id="topic" label="" variant="outlined" value={values.topic}/>
            </div>
            <div className="form--element">
                <label for="content">What specifically did you learn?</label>
                <TextField id="content" label="" variant="outlined" value={values.learnt}/>
            </div>
            <div className="form--button">
                <Button variant="outlined" color="primary">SUBMIT</Button>
            </div>
        </form>
    );
}

export default TodayForm;