import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import SignUp from './SignUp'
import { urlUsers } from '../data/url';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

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
        PasswordUser: 0,
    });

    const [passwordVisible, setPasswordVisible]= useState(false);
    const elem = document.getElementById('PasswordUser');
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
        // console.log('firstName: '+user.FirstName+' lastName: '+user.LastName+' password: '+user.PasswordUser);
    };
    const handlePasswordVisible = () =>
    {
        let text=user.PasswordUser;
        console.log('text', text);
        setPasswordVisible(!passwordVisible);
        console.log('visible', setPasswordVisible);
        if(passwordVisible)
        {
            elem.value = text;
            //This is required as wihtout it there is a bug that duplicated the first entry if someone decides to show the password
            elem.value = elem.value.substring(0, text.length - 1)
            console.log(`Text When Password = Visible: ${text}`)
        }else
        {
            elem.value = "*".repeat(text.length - 1)
            console.log(`Text When Password = Hidden: ${text}`)
        }
    }

    return (
        <>
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
                <Form.Control id="PasswordUser" name="PasswordUser" type="text" placeholder="Password" onChange={(e) => handleChange(e)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={()=>handlePasswordVisible} type="checkbox" label="show password" />
            </Form.Group>
            <Form.Group>
                {/* <Form.call func= "" label="Forget passwore" /> */}
                <Form.Text className="text-muted">
                Forget passwore
                </Form.Text>
            </Form.Group>
            <Button onClick={(e) => signInFunc(e)} /*type="submit" label="Submit"/* onClick={()=>signInFunc()}*/>
                sign-in
            </Button>
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