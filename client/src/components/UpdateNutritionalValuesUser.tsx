import React, { ChangeEvent } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import picture from '../assets/images/c.jpg';
declare module '*.jpg';
declare module "*.png";
  
export const UpdateNtritionalValuesUser = () =>
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
  }
  
    return(
       <>
        <div>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
        </head>
        {/* <Stack direction="horizontal" gap={2}>
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
            bsPrefix={"width: 30px"}
            src={picture}
          />
        </Figure>
        </Stack> */}
        <Form>
            <div id="center">
            <InputGroup className="mb-3">
            <Form.Text> i want to set for: </Form.Text>
            </InputGroup>

            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="daily"
                name="group1"
                type='radio'
                onChange={(e) => handleChangeCategory(e, 'daily')}
              />
              <Form.Check
                inline
                label="weekly"
                name="group1"
                type='radio'
                onChange={(e) => handleChangeCategory(e, 'weekly')}
              />
              <Form.Check
                inline
                label="monthly"
                name="group1"
                type='radio'
                onChange={(e) => handleChangeCategory(e, 'monthly')}
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
                  <td>quentity</td>
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
                <td>max or min</td>
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

