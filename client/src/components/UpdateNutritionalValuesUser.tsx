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
  // const [food, setFood]=useState({
  //   "NameFood": " ",
  //   "Category": "",
  //   "Picture": ""
  // })

  const [nutritionalValuesForMaxOrMin, setNutritionalValuesForMaxOrMin]=useState({
    Calories: true,
    Proteins: true,
    Carbohydrates: true,
    SaturatedFat: true,
    TransFat : true,
    Cholesterol: true,
    DietaryFiber: true,
    Sugars: true
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
  const [PersonalTime, setPersonalTime] = useState('daily');
  const [allUpdate, setAllUpdate] = useState(true);
  // const handleChange = (event: {target: { name: string; value: string; }; } | undefined) => {
  //   const nameOfProp = event?.target.name;
  //   const value = event?.target.value;
  //       let f=food;
  //       if(nameOfProp === 'NameFood' && typeof(value) === 'string')
  //       {
  //         f.NameFood = value;
  //       }
  //       if(nameOfProp === 'group1' && typeof(value) === 'string')
  //       {
  //         f.Category = value;
  //       }
  //       if(nameOfProp === 'Picture' && typeof(value) === 'string')
  //       {
  //         f.Picture = value;
  //       }
  //       setFood(f);
  //       console.log(nameOfProp+ " "+value);
  //       console.log(food);
        
        
  // };

  const handlePersonalTime = (e: {target: { name: string; value: string; }; } | undefined, label: string | undefined) => 
  {
    console.log(label);
    setPersonalTime(label? label: 'daily')
  };

  const handleChangeNutritionalValuesForMaxOrMin = (e: React.ChangeEvent<HTMLSelectElement>) => 
  {
    setNutritionalValuesForMaxOrMin({
      ...nutritionalValuesForMaxOrMin,
      [e.target.name]:  (e.target.value.toString() === "Maximum") ? true : false
    });
    console.log("hai: " +nutritionalValuesForMaxOrMin.Calories);
  };

  const changeAllNutritionalValuesForMaxOrMin = () => 
  {
    if(allUpdate === true)
    {
      // setAllUpdate(!allUpdate);
      setNutritionalValuesForMaxOrMin({
        ["Calories"] : false,
        ["Carbohydrates"] : false,
        ["Cholesterol"] : false,
        ["DietaryFiber"] : false,
        ["Proteins"] : false,
        ["SaturatedFat"] : false,
        ["Sugars"] : false,
        ["TransFat"] : false,
      });
      // console.log("allupdates: " + allUpdate + "nutritionalValuesForMaxOrMin.calories: "+nutritionalValuesForMaxOrMin.Calories);
      
    }else
    {
      // setAllUpdate(!allUpdate);
      setNutritionalValuesForMaxOrMin({
        ["Calories"] : true,
        ["Carbohydrates"] : true,
        ["Cholesterol"] : true,
        ["DietaryFiber"] : true,
        ["Proteins"] : true,
        ["SaturatedFat"] : true,
        ["Sugars"] : true,
        ["TransFat"] : true,
      });
      console.log("allupdates: " + allUpdate + "nutritionalValuesForMaxOrMin.calories: "+nutritionalValuesForMaxOrMin.Calories);
    }
  }

  const handleChangeNutritionalValues = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => 
  {
    setNutritionalValues({
      ...nutritionalValues,
      [e.target.name]: e.target.value.trim(),
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
                onChange={(e) => handlePersonalTime(e, 'daily')}
              />
              <Form.Check
                inline
                label="weekly"
                name="group1"
                type='radio'
                onChange={(e) => handlePersonalTime(e, 'weekly')}
              />
              <Form.Check
                inline
                label="monthly"
                name="group1"
                type='radio'
                onChange={(e) => handlePersonalTime(e, 'monthly')}
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
                    <Form.Control name="Calories" placeholder={nutritionalValues.Calories.toString()} type="number" min="0" aria-label="Text input with dropdown button" 
                    onChange={(e) => handleChangeNutritionalValues(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="Proteins" placeholder={nutritionalValues.Proteins.toString()} type="number" min="0"  aria-label="Text input with dropdown button" 
                    onChange={(e) => handleChangeNutritionalValues(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="Carbohydrates" placeholder={nutritionalValues.Carbohydrates.toString()} type="number" min="0" aria-label="Text input with dropdown button" 
                    onChange={(e) => handleChangeNutritionalValues(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="SaturatedFat" placeholder={nutritionalValues.SaturatedFat.toString()} type="number" min="0" aria-label="Text input with dropdown button" 
                    onChange={(e) => handleChangeNutritionalValues(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="TransFat" placeholder={nutritionalValues.TransFat.toString()} type="number" min="0" aria-label="Text input with dropdown button" 
                    onChange={(e) => handleChangeNutritionalValues(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="Cholesterol" placeholder={nutritionalValues.Cholesterol.toString()} type="number" min="0" aria-label="Text input with dropdown button" 
                    onChange={(e) => handleChangeNutritionalValues(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="DietaryFiber" placeholder={nutritionalValues.DietaryFiber.toString()} type="number" min="0" aria-label="Text input with dropdown button" 
                    onChange={(e) => handleChangeNutritionalValues(e)}/>
                  </InputGroup>
                  </td>
                  <td>
                  <InputGroup >
                    <Form.Control name="Sugars" placeholder={nutritionalValues.Sugars.toString()} type="number" min="0" aria-label="Text input with dropdown button" 
                    onChange={(e) => handleChangeNutritionalValues(e)}/>
                  </InputGroup>
                  </td>
                </tr>

                <tr>
                <td>max or min</td>
                  <td>
                  <Form.Select name="Calories"   
                    onChange={(e)=>handleChangeNutritionalValuesForMaxOrMin(e)} aria-label="Default select example">
                    <option value="1">Maximum</option>
                    <option value="2">Minimum</option>
                  </Form.Select>
                  </td>
                  <td>
                  <Form.Select name="Proteins" placeholder={nutritionalValues.Proteins.toString()} 
                    onChange={(e)=>handleChangeNutritionalValuesForMaxOrMin(e)} aria-label="Default select example">
                    <option value="1">Maximum</option>
                    <option value="2">Minimum</option>
                  </Form.Select>
                  </td>
                  <td>
                  <Form.Select name="Carbohydrates" placeholder={nutritionalValues.Carbohydrates.toString()}  
                    onChange={(e)=>handleChangeNutritionalValuesForMaxOrMin(e)} aria-label="Default select example">
                    <option value="1">Maximum</option>
                    <option value="2">Minimum</option>
                  </Form.Select>
                  </td>
                  <td>
                  <Form.Select name="SaturatedFat" placeholder={nutritionalValues.SaturatedFat.toString()}  
                    onChange={(e)=>handleChangeNutritionalValuesForMaxOrMin(e)} aria-label="Default select example">
                    <option value="1">Maximum</option>
                    <option value="2">Minimum</option>
                  </Form.Select>
                  </td>
                  <td>
                  <Form.Select name="TransFat" placeholder={nutritionalValues.TransFat.toString()}  
                    onChange={(e)=>handleChangeNutritionalValuesForMaxOrMin(e)} aria-label="Default select example">
                    <option value="1">Maximum</option>
                    <option value="2">Minimum</option>
                  </Form.Select>
                  </td>
                  <td>
                  <Form.Select name="Cholesterol" placeholder={nutritionalValues.Cholesterol.toString()}  
                    onChange={(e)=>handleChangeNutritionalValuesForMaxOrMin(e)} aria-label="Default select example">
                    <option value="1">Maximum</option>
                    <option value="2">Minimum</option>
                  </Form.Select>
                  </td>
                  <td>
                  <Form.Select name="DietaryFiber" placeholder={nutritionalValues.DietaryFiber.toString()}  
                    onChange={(e)=>handleChangeNutritionalValuesForMaxOrMin(e)} aria-label="Default select example">
                    <option value="1">Maximum</option>
                    <option value="2">Minimum</option>
                  </Form.Select>
                  </td>
                  <td>
                  <Form.Select name="Sugars" placeholder={nutritionalValues.Sugars.toString()}  
                    onChange={(e)=>handleChangeNutritionalValuesForMaxOrMin(e)} aria-label="Default select example">
                    <option value="1">Maximum</option>
                    <option value="2">Minimum</option>
                  </Form.Select>
                  </td>
                  
                </tr>
              </tbody>
            </Table>
            {/* //why button update all the component ?
            <Button onClick={() => changeAllNutritionalValuesForMaxOrMin()} type="submit">All</Button> */}
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





