import React, {useState} from 'react';
import axios from 'axios';
import './Login.css';

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleChange = (({target}) => {
        const id = target.id;
        if(id === 'username') setUsername(target.value);
        else setPassword(target.value);
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            axios.post('http://localhost:5000/users/login', {
                username,
                password
            })
            .then((res) => {
                console.log(res)
            })
        } catch(err) {
            console.log(err)
        }
    }
    

    return (
        <div className="login-container">
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="" name="username" id="username" value={username}  onChange={handleChange}/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" value={password} onChange={handleChange}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
