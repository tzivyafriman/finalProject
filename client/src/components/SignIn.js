import { BrowserRouter as Router, Routes, Route, Link, Navigate  } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import SignUp from './SignUp'
import { urlUsers } from '../data/url';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react'; 
// import Link from 'react-bootstrap/Link';

import 'bootstrap/dist/css/bootstrap.min.css';
import { formatDiagnostic } from "typescript";
import { ShowFood } from './ShowFood';
import { AboutFood } from './AboutFood';
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

    const [inCorrectDetails, setInCorrectDetails] = useState(false);

    
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
                    // <Redirect to="/signUp" />
                    
                }else{
                    console.log("i else");
                    setInCorrectDetails(true);
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
                <InputGroup className="mb-3">
                {/* <div class="col-11"> */}
                    <Form.Control
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon2"
                    id="PasswordUser" name="PasswordUser" type={passwordType} /*value={user.PasswordUser}*/ /*placeholder="Password"*/ onChange={(e) => handleChange(e)} class="form-control-plaintex"/>  
                {/* </div> */}
                <Button variant="outline-secondary" id="button-addon2"/*className="btn btn-outline-primary"*/ onClick={(e) => togglePassword(e)}>
                    { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                </Button>
                </InputGroup>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="show password" />
            </Form.Group> */}
            {/* <Form.Group>
                <Form.Text className="text-muted">
                Forget passwore
                </Form.Text>
            </Form.Group> */}
            <Form.Group>
                {
                    inCorrectDetails?<Form.Text id="inCorrect">your name or your password in correct! try again</Form.Text>:
                    <Form.Text> </Form.Text>
                }
            </Form.Group>
            <Stack direction="horizontal" gap={3}>
            <Button onClick={(e) => signInFunc(e)} /*type="submit" label="Submit"/* onClick={()=>signInFunc()}*/>
                sign-in
            </Button> 
            <Link className="ms-auto" to={"/signUp/"} id="linkTo">{'sign-up'} </Link>
            
            <Link to={"/SignInWithoutPassword"}>{'Forget password'}</Link>
            </Stack>
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