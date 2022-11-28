import React, { ChangeEvent } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import  { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import foodsList from '../data/Foods';
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { isPropertyAccessExpression } from "typescript";
import picture from '../assets/images/c.jpg';
declare module '*.jpg';
declare module "*.png";

  
export const AddDish = (props: any) =>
{
  const [food, setFood]=useState({
    "NameFood": " ",
    "Category": "",
    "Picture": ""
  })

  const [nutritionalValuesFor100g, setNutritionalValuesFor100g]=useState({
    Calories: 0,
    Proteins: 0,
    Carbohydrates: 0,
    SaturatedFat: 0,
    TransFat : 0,
    Cholesterol: 0,
    DietaryFiber: 0,
    Sugars: 0
  })
  const [nutritionalValues, setNutritionalValues]=useState({
    Calories: 0,
    Proteins: 0,
    Carbohydrates: 0,
    SaturatedFat: 0,
    TransFat : 0,
    Cholesterol: 0,
    DietaryFiber: 0,
    Sugars: 0
  });
  const [PersonalGr, setPersonalGr] = useState(0);

  const handleChange = (event: {target: { name: string; value: string; }; } | undefined) => {
    const nameOfProp = event?.target.name;
    const value = event?.target.value;
        let f=food;
        if(nameOfProp === 'NameFood' && typeof(value) === 'string')
        {
          f.NameFood = value;
        }
        if(nameOfProp === 'group1' && typeof(value) === 'string')
        {
          f.Category = value;
        }
        if(nameOfProp === 'Picture' && typeof(value) === 'string')
        {
          f.Picture = value;
        }
        setFood(f);
        console.log(nameOfProp+ " "+value);
        console.log(food);
        
        
  };

  const handleChangeCategory = (event: {target: { name: string; value: string; }; } | undefined, label: string | undefined) => 
  {
    console.log(label);
    let f=food;
    f.Category = label? label: '';
    setFood(f);
    console.log(food);
  };

  const handleChangeNutritionalValuesFor100G = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => 
  {
    // console.log("name: " + e.target.name+" value: " + e.target.value);
    //למה רק בפעם הבאה הוא מדפיס את מה שהכנסתי בפעם הקודמת?
    setNutritionalValuesFor100g({
      ...nutritionalValuesFor100g,
      [e.target.name]: e.target.value.trim(),
    });
    setNutritionalValues({
      ...nutritionalValues,
      [e.target.name]: Number(e.target.value)/100*PersonalGr,
    })
    console.log("hai: " +nutritionalValuesFor100g.Calories);
  };

  const handleChangeNutritionalValues = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => 
  {
    setNutritionalValues({
      ...nutritionalValues,
      [e.target.name]: e.target.value.trim(),
    });
    setNutritionalValuesFor100g({
      ...nutritionalValuesFor100g,
      [e.target.name]: Number(e.target.value)/PersonalGr*100,
    })
  };

  const addFood = () =>
  {
    //add server-request for add food
  }
  // const handleChangeNutritionalValues = (event: {target: { name: string; value: string; }; } | undefined) =>
  // {
  //   if(event)
  //   {
  //       const { name, value } = event.target;
  //       console.log("name: " + name + " value: " + value);
  //       let nvFor100gr = nutritionalValuesFor100g;
  //       let nvForPersonalGr = setNutritionalValues;
  //       if (Object.keys(nvFor100gr).includes(name)) 
  //       {
  //         console.log(Object.keys(nvFor100gr).indexOf(name));
  //         ({nvFor100gr: value } as Pick<string,  number>);
  //       }
  //       console.log(nvFor100gr);
  //     }
  //   }
  // }

    return(
       <>
        <div>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
        </head>
        <Stack direction="horizontal" gap={2}>
        <Figure className="col-md-5 mx-auto">
          <Figure.Caption>
            <InputGroup className="mb-3">
              <Form.Text> Name of product: </Form.Text>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><i className="bi bi-pencil-fill"></i></InputGroup.Text>
              <Form.Control
                name="NameFood"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
                onChange={(e) => handleChange(e)}/>
            </InputGroup>
          </Figure.Caption>
          <Figure.Image className="col-md-5 mx-auto"
            roundedCircle={true}
            // width={30}
            // height={30}
            // alt="30x30"
            // fluid={true}
            // thumbnail={true}
            bsPrefix={"width: 30px"}
            src={picture}
          />
        </Figure>
        </Stack>
        <Form>
            <div id="center">
            {/* <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i className="bi bi-card-image"></i></InputGroup.Text>
                <Form.Control 
                name="Picture"
                aria-label="Picture"
                aria-describedby="basic-addon1" 
                type="text" 
                accept="image/*" 
                placeholder="Picture"
                onChange={(e) => handleChange(e)}
                />
            </InputGroup>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i className="bi bi-pencil-fill"></i></InputGroup.Text>
            <Form.Control
              name="NameFood"
              placeholder="Name"
              aria-label="Name"
              aria-describedby="basic-addon1"
              onChange={(e) => handleChange(e)}/>
            </InputGroup> */}
            <InputGroup className="mb-3">
            <Form.Text> Category of product: </Form.Text>
            </InputGroup>

            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="Carbohydrates"
                name="group1"
                type='radio'
                // id={`inline-radio-1`}
                onChange={(e) => handleChangeCategory(e, 'Carbohydrates')}
              />
              <Form.Check
                inline
                label="Vegetables"
                name="group1"
                type='radio'
                // id={`inline-radio-2`}
                onChange={(e) => handleChangeCategory(e, 'Vegetables')}
              />
              <Form.Check
                inline
                label="Fruit"
                name="group1"
                type='radio'
                // id={`inline-radio-3`}
                onChange={(e) => handleChangeCategory(e, 'Fruit')}
              />
              <Form.Check
                inline
                label="Proteins"
                type='radio'
                name="group1"
                // id={`inline-radio-3`}
                onChange={(e) => handleChangeCategory(e, 'Proteins')}
              />
              <Form.Check
                inline
                label="Fat"
                type='radio'
                name="group1"
                // id={`inline-radio-3`}
                onChange={(e) => handleChangeCategory(e, 'Fat')}
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
                  <th>Trans fat</th>
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
                    <Form.Control name="Calories" placeholder={nutritionalValuesFor100g.Calories.toString()} type="number" min="0" max="1500" aria-label="Text input with dropdown button" 
                    onChange={(e) => handleChangeNutritionalValuesFor100G(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="Proteins" placeholder={nutritionalValuesFor100g.Proteins.toString()} type="number" min="0" max="1500" aria-label="Text input with dropdown button" 
                    onChange={(e) => handleChangeNutritionalValuesFor100G(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="Carbohydrates" placeholder={nutritionalValuesFor100g.Carbohydrates.toString()} type="number" min="0" max="1500" aria-label="Text input with dropdown button" 
                    onChange={(e) => handleChangeNutritionalValuesFor100G(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="SaturatedFat" placeholder={nutritionalValuesFor100g.SaturatedFat.toString()} type="number" min="0" max="1500" aria-label="Text input with dropdown button" 
                    onChange={(e) => handleChangeNutritionalValuesFor100G(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="TransFat" placeholder={nutritionalValuesFor100g.TransFat.toString()} type="number" min="0" max="1500" aria-label="Text input with dropdown button" 
                    onChange={(e) => handleChangeNutritionalValuesFor100G(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="Cholesterol" placeholder={nutritionalValuesFor100g.Cholesterol.toString()} type="number" min="0" max="1500" aria-label="Text input with dropdown button" 
                    onChange={(e) => handleChangeNutritionalValuesFor100G(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="DietaryFiber" placeholder={nutritionalValuesFor100g.DietaryFiber.toString()} type="number" min="0" max="1500" aria-label="Text input with dropdown button" 
                    onChange={(e) => handleChangeNutritionalValuesFor100G(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="Sugars" placeholder={nutritionalValuesFor100g.Sugars.toString()} type="number" min="0" max="1500" aria-label="Text input with dropdown button" 
                    onChange={(e) => handleChangeNutritionalValuesFor100G(e)}/>
                  </InputGroup>
                  </td>
                </tr>

                <tr>
                  <td>
                  <InputGroup >
                    <Form.Control name="PersonalGr" placeholder={PersonalGr.toString()} min="0" max="1500" aria-label="Text input with dropdown button"
                    onChange={(e)=>setPersonalGr(Number(e.target.value))}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="Calories" placeholder={nutritionalValues.Calories.toString()} type="number" min="0" max="1500" aria-label="Text input with dropdown button" 
                    onChange={(e)=>handleChangeNutritionalValues(e)} />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="Proteins" placeholder={nutritionalValues.Proteins.toString()} type="number" min="0" max="1500" aria-label="Text input with dropdown button"
                    onChange={(e)=>handleChangeNutritionalValues(e)} />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="Carbohydrates" placeholder={nutritionalValues.Carbohydrates.toString()} type="number" min="0" max="1500" aria-label="Text input with dropdown button" 
                    onChange={(e)=>handleChangeNutritionalValues(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="SaturatedFat" placeholder={nutritionalValues.SaturatedFat.toString()} type="number" min="0" max="1500" aria-label="Text input with dropdown button" 
                    onChange={(e)=>handleChangeNutritionalValues(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="TransFat" placeholder={nutritionalValues.TransFat.toString()} type="number" min="0" max="1500" aria-label="Text input with dropdown button" 
                    onChange={(e)=>handleChangeNutritionalValues(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="Cholesterol" placeholder={nutritionalValues.Cholesterol.toString()} type="number" min="0" max="1500" aria-label="Text input with dropdown button" 
                    onChange={(e)=>handleChangeNutritionalValues(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="DietaryFiber" placeholder={nutritionalValues.DietaryFiber.toString()} type="number" min="0" max="1500" aria-label="Text input with dropdown button"
                    onChange={(e)=>handleChangeNutritionalValues(e)} />
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="Sugars" placeholder={nutritionalValues.Sugars.toString()} type="number" min="0" max="1500" aria-label="Text input with dropdown button" 
                    onChange={(e)=>handleChangeNutritionalValues(e)}/>
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
            <Stack direction="horizontal" gap={1}>
                <Button className="col-md-5 mx-auto" onClick={(e) => addFood()}>
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
