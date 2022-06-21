import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import SignUp from './SignUp'
import { urlUsers } from '../data/url';
const url= urlUsers;

const SignIn = () => {

    const [currentUser, setCurrentUser] = useState({
        IdUser: 0,
        FirstName: "",
        LastName: "",
        PasswordUser: 0,
    });

    const [user, setUser] = useState({
        IdUser: 0,
        FirstName: "",
        LastName: "",
        PasswordUser: 0,
    });
    //צריך את זה?
    // למה לא?
    // למה אתה לא עובד?????
    // tfyguj
    useEffect(() => {
        console.log(user.FirstName);
    }, [user]);

    // קבלת רשימת משתמשים
    const signIn = () => {
        // GET request using axios with error handling
        axios.get(url+ '/login',user)
            .then(response => {
                if(response == true){
                    currentUser = response.data;
                }else{
                   <SignUp/> 
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
            <b>SignIn </b><br></br>
            <b>welcome! enter your details: </b><br></br>
            <input name="FirstName" onChange={(e) => handleChange(e)} type="text" placeholder="firs name"></input><br></br>
            <input name="LastName" onChange={(e) => handleChange(e)} type="text" placeholder="last name"></input><br></br>
            <input name="PasswordUser" onChange={(e) => handleChange(e)} type="password" placeholder="password"></input><br></br>
            <input id="password2" type="password" placeholder="your password again"></input><br></br>
            {/* <button onClick={addUser}>save</button> */}
            {/* קבלת רשימת משתמשים */}
            <button onClick={signIn}>Sign in</button>
        </div>
    )
}
export default SignIn;