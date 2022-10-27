import { BrowserRouter as Router, Routes, Route, Link, Navigate  } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import SignUp from './SignUp'
import { urlUsers } from '../data/url';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
// import Link from 'react-bootstrap/Link';

import 'bootstrap/dist/css/bootstrap.min.css';
import { formatDiagnostic } from "typescript";

const url= urlUsers;

const SignIn = () => {

    const [currentUser, setCurrentUser] = useState({
        IdUser: 0,
        FirstName: "",
        LastName: "",
        PasswordUser: 0,
    });

    const [user, setUser] = useState({
        IdUser: 1,
        // Name: "",
        FirstName: "",
        LastName: "",
        PasswordUser: "",
    });

    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () =>
    {
      if(passwordType==="password")
      {
       setPasswordType("text");
       return;
      }
      setPasswordType("password");
    }
    //צריך את זה?
    // למה לא?
    // למה אתה לא עובד?????
    // useEffect(() => {
    //     console.log(user.FirstName);
    // }, [user]);

     // בדיקה האם המשתמש קיים
    const signInFunc = () => {
        // GET request using axios with error handling
        console.log('firstName: '+user.FirstName+' lastName: ', user.LastName+' password: ', user.PasswordUser)
        axios.post(url+'/Login',user)
            .then(response => {
                // console.log("response: " + JSON.stringify(response.data ) )
                if(response.data == true){
                    console.log('i recognize!');
                    currentUser = response.data;
                    
                }else{
                    console.log("i else");
                    // { <SignUp />}
                  
                   {<SignUp/>} 
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
        // console.log('firstName: '+user.FirstName+' lastName: '+user.LastName+' password: '+user.PasswordUser);
    };

    return (
        <>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
        </head>
            <Form id="center">
            <Form.Group className="mb-3" /*controlId="formBasicEmail"*/>
            <Form.Control name="FirstName" type="text" placeholder="firstName" onChange={(e) => handleChange(e)}/>
                <Form.Text className="text-muted">
                    fullName or only firstName
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" /*controlId="formBasicEmail"*/>
                <Form.Control name="LastName" type="text" placeholder="lastName" onChange={(e) => handleChange(e)}/>
            </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <div class="col-11">
                    <Form.Control  id="PasswordUser" name="PasswordUser" type={passwordType} /*value={user.PasswordUser}*/ placeholder="Password" onChange={(e) => handleChange(e)} class="form-control-plaintex"/>
                    </div>
                        <Button /*className="btn btn-outline-primary"*/ onClick={(e) => togglePassword(e)}>
                    { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                        </Button>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check /*onClick={()=>}*/ type="checkbox" label="show password" />
            </Form.Group>
            <Form.Group>
                {/* <Form.call func= "" label="Forget passwore" /> */}
                <Form.Text className="text-muted">
                Forget passwore
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Text>your name or your password</Form.Text>
            </Form.Group>
            <Button onClick={(e) => signInFunc(e)} /*type="submit" label="Submit"/* onClick={()=>signInFunc()}*/>
                sign-in
            </Button> 
            <Link to={"/signUp/"} id="linkTo">{'sign-up'} </Link>
        </Form>
</>

        // <Form className="center">
        //     <Form.Group className="mb-3" controlId="formBasicEmail">
        //         <Form.Label>Email address</Form.Label>
        //         <Form.Control type="email" placeholder="Enter email" />
        //         <Form.Text className="text-muted">
        //         We'll never share your email with anyone else.
        //         </Form.Text>
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="formBasicPassword">
        //         <Form.Label>Password</Form.Label>
        //         <Form.Control type="password" placeholder="Password" />
        //     </Form.Group>
        //     <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //         <Form.Check type="checkbox" label="Check me out" />
        //     </Form.Group>
        //     <Button variant="primary" type="submit">
        //         Submit
        //     </Button>
        // </Form>
    );
    

        // <div>
        //    <b>SignIn </b><br></br>
        //     <b>welcome! enter your name and password: </b><br></br>
        //     <input name="FirstName" onChange={(e) => handleChange(e)} type="text" placeholder="firs name"></input><br></br>
        //     <input name="LastName" onChange={(e) => handleChange(e)} type="text" placeholder="last name"></input><br></br>
        //     <input name="PasswordUser" onChange={(e) => handleChange(e)} type="password" placeholder="password"></input><br></br>
        //     <button onClick={signIn}>Sign In</button>
        // </div>
}
export default SignIn;