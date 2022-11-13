import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import  { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const AddDish = (props: any) =>
{
  document
  .getElementById('file-input')
  ?.addEventListener('change', event =>{
    console.log("sdfghjk,./");
    console.log((event.target as Element))}
  );
    return(
       <>
        <div>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
        </head>
        <Form>
            {/* <Image src="C:\Users\1\Pictures\forweek7\cooper"></Image> */}
            <div id="center">
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i className="bi bi-card-image"></i></InputGroup.Text>
                <Form.Control 
                name="Picture"
                aria-label="Picture"
                aria-describedby="basic-addon1" 
                type="text" 
                accept="image/*" 
                placeholder="Picture" /*onChange={(e) => handlePicture(e)}*//>
            </InputGroup>

            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i className="bi bi-pencil-fill"></i></InputGroup.Text>
            <Form.Control
              placeholder="Name"
              aria-label="Name"
              aria-describedby="basic-addon1"
            />
            </InputGroup>
            <InputGroup className="mb-3">
            <Form.Text> Category of product: </Form.Text>
            </InputGroup>

            <div key={`inline-radio`} className="mb-3">
              {/* <Form.Text>Category of product: </Form.Text> */}
              <Form.Check
                inline
                label="Carbohydrates"
                name="group1"
                type='radio'
                id={`inline-radio-1`}
              />
              <Form.Check
                inline
                label="Vegetables"
                name="group1"
                type='radio'
                id={`inline-radio-2`}
              />
              <Form.Check
                inline
                label="Fruit"
                name="group1"
                type='radio'
                id={`inline-radio-3`}
              />
              <Form.Check
                inline
                label="Proteins"
                type='radio'
                name="group1"
                id={`inline-radio-3`}
              />
              <Form.Check
                inline
                label="Fat"
                type='radio'
                name="group1"
                id={`inline-radio-3`}
              />
            </div>
            </div>
            
            <div id="center2">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Calories</th>
                  <th>Proteins</th>
                  <th>Carbohydrates</th>
                  <th>Saturated fat</th>
                  <th>trans fat</th>
                  <th>Cholesterol</th>
                  <th>Dietary fiber</th>
                  <th>Sugars</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>for 100gr</td>
                  <td>
                  <InputGroup >
                    <Form.Control type="number" min="0" max="1500" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control type="number" min="0" max="1500" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control type="number" min="0" max="1500" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control type="number" min="0" max="1500" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control type="number" min="0" max="1500" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control type="number" min="0" max="1500" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control type="number" min="0" max="1500" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control type="number" min="0" max="1500" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </td>
                </tr>
                <tr>
                  <td>
                  <InputGroup >
                    <Form.Control type="number" min="0" max="1500" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control type="number" min="0" max="1500" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control type="number" min="0" max="1500" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control type="number" min="0" max="1500" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control type="number" min="0" max="1500" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control type="number" min="0" max="1500" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control type="number" min="0" max="1500" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control type="number" min="0" max="1500" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control type="number" min="0" max="1500" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </td>
                </tr>
              </tbody>
            </Table>
            </div>
            {/* <Form.Group>
            {
                inCorrectLastName?<Form.Text id="inCorrect">last name must be 2 letters! try again</Form.Text>:
                <Form.Text> </Form.Text>
            }
            </Form.Group> */}
            
            {/* <Form.Group>
            {
                inCorrectPassword?<Form.Text id="inCorrect">your password incorrect! try again</Form.Text>:
                <Form.Text> </Form.Text>
            }
            </Form.Group> */}
            <Stack direction="horizontal" gap={3}>
                <Button /*onClick={(e) => signUp(e)}*/>
                    save-me
                </Button>
                {/* <Link className="ms-auto" to={"/signIn/"} id="linkTo">{'Sign-in'} </Link> */}
            </Stack>
        </Form>
        </div>
       </>
    )

    
}

// import { useRouter } from 'next/router';
// import * as Yup from 'yup';
// import { getOtt } from 'services/userService';
// import { setData, LS_KEYS, getData } from 'utils/storage/localStorage';
// import SubmitButton from 'components/SubmitButton';
// import LogoImg from './LogoImg';
// import { PAGES } from 'constants/pages';
