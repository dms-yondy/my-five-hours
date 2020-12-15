import React, {useState} from 'react';
import { Button } from './Button';
import axios from 'axios';
import './SignUp.css'

export default function SignUp() {
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleChange = (({target}) => {
        const id = target.id;
        const value  = target.value;
        if(id === 'username') setUsername(value);
        else if(id === 'email') setEmail(value);
        else if(id === 'password') setPassword(value);
        else setConfirmPassword(value);
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            axios.post('http://localhost:5000/users/add', {
                username,
                email,
                password,
                confirmPassword
            })
            .then((res) => {
                console.log(res);
            })
        } catch(err) {
            console.log(err);
        }
       
    }

    return (
        <div className="sign-up--container">
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <h1 className="sign-up-form__title">Sign Up</h1>
                <div className="form-item">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" value={username} onChange={handleChange}></input>
                </div>
                <div className="form-item">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={email} onChange={handleChange}></input>
                </div>
                <div className="form-item">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" value={password} onChange={handleChange}></input>
                </div>
                <div className="form-item">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" value={confirmPassword} onChange={handleChange}></input>
                </div>
                <div>
                    <Button>SIGN UP</Button>
                </div>
            </form>
        </div>
    )
}
