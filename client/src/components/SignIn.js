import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import SignUp from './SignUp';
import { urlUsers } from '../data/url';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const url= urlUsers;
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossorigin="anonymous"
/>

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

     // בדיקה האם המשתמש קיים
    const signIn = () => {
        console.log("i signIn");

        // GET request using axios with error handling
        // axios.get(url+ '/Login',user)
        //     .then(response => {
        //         if(response == true){
        //             currentUser = response.data;
        //             console.log("i signIn");
        //         }else{
        //             // { <SignUp />}
        //             // console.log(response.data);
        //            <SignUp/> 
        //         }
        //     })
            // .catch(error => {
            //     console.error('There was an error!', error);
            // });
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
        <div id="center">
           {/* <b>SignIn </b><br></br>
            <b>welcome! enter your name and password: </b><br></br>
            <input name="FirstName" onChange={(e) => handleChange(e)} type="text" placeholder="first name"></input><br></br>
            <input name="LastName" onChange={(e) => handleChange(e)} type="text" placeholder="last name"></input><br></br>
            <input name="PasswordUser" onChange={(e) => handleChange(e)} type="password" placeholder="password"></input><br></br>
            <button onClick={signIn}>Sign In</button> */}
            
           
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Control name="FirstName" type="text" onChange={(e) => handleChange(e)} placeholder="first name" />
                </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Control name="LastName" type="text" onChange={(e) => handleChange(e)} placeholder="last name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control name="PasswordUser" type="password" onChange={(e) => handleChange(e)} placeholder="password" />
                </Form.Group>
                {/* <Button variant="primary" type="submit" onClick={signIn}>
                    sign in
                </Button> */}
            </Form>
        </div>
    )
}
export default SignIn;