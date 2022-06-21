import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import { urlUsers } from '../data/url';
const url= urlUsers;

const SignUp = () => {

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
    const signUp = () => {
        // GET request using axios with error handling
        axios.get(urlUsers)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    //הוספת משתמש חדש למערכת
    const addUser = () => {
        axios.post(urlUsers + '/addUser',user)
            .then((res) => {
                console.log(res)
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
            <button onClick={addUser}>save</button>
            {/* קבלת רשימת משתמשים */}
            <button onClick={signUp}>Sign up</button>
        </div>
    )
}
export default SignUp;