import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import { urlUsers } from '../data/url'; 
import SignUp from './SignUp';

const SignIn = () => {

    const [user, setUser] = useState({
        FirstName: "",
        LastName: "", 
        PasswordUser: 0,
    });
    //צריך את זה?
    useEffect(() => {
        console.log(user.FirstName);
    }, [user]);

    // בדיקה האם המשתמש קיים
    const signIn = () => {
        // GET request using axios with error handling
        axios.get(urlUsers + '/login',user)
            .then(response => {
                if( response === true)
                {
                    const current = response.data
                }else
                {
                    { <SignUp />}
                    console.log(response.data);
                    // {<SignUp />} 
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }
    
    //מעדכנת את stateUser  מה form 
    const handleChange = (event) => {
        const { name, value } = event.target;
            let us=user;
            us[name]=value;
            setUser(us);
        // setUser({ ...user, [name]: value });
    };

    return (
        <div>
            <b>welcome! enter your name and password: </b><br></br>
            <input name="FirstName" onChange={(e) => handleChange(e)} type="text" placeholder="firs name"></input><br></br>
            <input name="LastName" onChange={(e) => handleChange(e)} type="text" placeholder="last name"></input><br></br>
            <input name="PasswordUser" onChange={(e) => handleChange(e)} type="password" placeholder="password"></input><br></br>
            <button onClick={signIn}>Sign In</button>
        </div>
    )
}
export default SignIn;