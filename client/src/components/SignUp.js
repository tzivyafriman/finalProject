import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import { urlUsers } from '../data/url';

import { BrowserRouter as Router, Routes, Route, Link, Navigate  } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const url= urlUsers;

const SignUp = () => {

    const [user, setUser] = useState({
        IdUser: 0,
        FirstName: "",
        LastName: "",
        PasswordUser: 0,
    });

    const [passwordType, setPasswordType] = useState("password");
    const [password, setPassword] = useState("password");
    const [inCorrectFirstName, setInCorrectFirstName] = useState(false);
    const [inCorrectLastName, setInCorrectLastName] = useState(false);
    const [inCorrectPassword, setInCorrectPassword] = useState(false);
   

    const signUp = () => {
        if(user.PasswordUser===password && user.FirstName.length>=2 && user.LastName.length>=2)
        {
            console.log("valid");
            addUser();
        }else
        {
            console.log("not valid");
            if(user.PasswordUser!==password)
            {
                setInCorrectPassword(true);
                console.log("password is correct");
            }
            if(user.FirstName===""||user.FirstName.length < 2)
            {
                console.log("firstName");
                setInCorrectFirstName(true);
            }
            if(user.LastName===""||user.LastName.length < 2)
            {
                setInCorrectLastName(true);
                console.log("lastName");
            }
        }
        // GET request using axios with error handling
        // axios.get(url)
        //     .then(response => {
        //         console.log(response.data);
        //     })
        //     .catch(error => {
        //         console.error('There was an error!', error);
        //     });
    }

    //הוספת משתמש חדש למערכת
    const addUser = () => {
        axios.post(url + '/addUser',user)
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
    const handlePassword = (event) =>
    {
        // const { value } = event.target;
        setPassword(event.target.value);
        // console.log(password);
    };

    const togglePassword = () =>
    {
      if(passwordType==="password")
      {
       setPasswordType("text");
       return;
      }
      setPasswordType("password");
    }

    return (
        <div>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
        </head>
            <Form id="center">
            <Form.Group className="mb-3">
                <Form.Control name="FirstName" type="text" placeholder="firstName" onChange={(e) => handleChange(e)}/>
            </Form.Group>
            <Form.Group>
            {
                inCorrectFirstName?<Form.Text id="inCorrect">first name must be 2 letters! try again</Form.Text>:
                <Form.Text> </Form.Text>
            }
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control name="LastName" type="text" placeholder="lastName" onChange={(e) => handleChange(e)}/>
            </Form.Group>
            <Form.Group>
            {
                inCorrectLastName?<Form.Text id="inCorrect">last name must be 2 letters! try again</Form.Text>:
                <Form.Text> </Form.Text>
            }
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control  id="PasswordUser" name="PasswordUser" type={passwordType} placeholder="Password" onChange={(e) => handleChange(e)} class="form-control-plaintex"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <div class="col-11">
                    <Form.Control  id="PasswordUser" name="PasswordUserAgain" type={passwordType} placeholder="Password" onChange={(e) => handlePassword(e)} class="form-control-plaintex"/>
                </div>
                <Button onClick={(e) => togglePassword(e)}>
                    { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                </Button>
            </Form.Group>
            <Form.Group>
            {
                inCorrectPassword?<Form.Text id="inCorrect">your password incorrect! try again</Form.Text>:
                <Form.Text> </Form.Text>
            }
            </Form.Group>

            <Button onClick={(e) => signUp(e)}>
                sign-up
            </Button>
            <Link to={"/signIn/"} id="linkTo">{'sign-in'} </Link>
            
        </Form>
        </div>
    )
}
export default SignUp;

            // <b>SignIn </b><br></br>
            // <b>welcome! enter your details: </b><br></br>
            // <input name="FirstName" onChange={(e) => handleChange(e)} type="text" placeholder="firs name"></input><br></br>
            // <input name="LastName" onChange={(e) => handleChange(e)} type="text" placeholder="last name"></input><br></br>
            // <input name="PasswordUser" onChange={(e) => handlePassword(e)} type="password" placeholder="password"></input><br></br>
            // <input id="password2" type="password" placeholder="your password again"></input><br></br>
            // <button onClick={addUser}>Sign up</button>
            // {/* קבלת רשימת משתמשים */}
            // <button onClick={signUp}>getUsers</button>