import React from "react";
import { useEffect, useState } from 'react';
import { Stack } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


//understand why the copied element dont go to start ???
const MealUserUpdate = (props) =>{

  const [counter, setCounter] = useState(1);
  // const [numOfMeals, setNumOfMeals] = useState(1);
  let numOfMeals = 1;

  //why it not render js for the clone object in return
  // const warpMeals = document.getElementById('warpMeals');
  // useEffect(() => {
  // }, warpMeals);

  const handleDrop = e => {
    console.log("drop on me");
    e.preventDefault();
    // e.stopPropagation();
    var data = e.dataTransfer.getData("Text");
    console.log("data: "+data);
    if(data!="")
    {
      e.target.appendChild(document.getElementById(data));
    }
    
  };
  
  const dragStart = (e) => {

    console.log("start");
    const basicElem = document.getElementById(e.target.id);
    //console.log("elem: " + elem);
    const elem = basicElem.closest('div');
    // Create a copy of it
    // clone = document.createElement('div'); 
    const clone = elem.cloneNode(true);
    // Update the ID and add a class
    clone.id = 'elem'+counter;
    setCounter(counter+1);
    // clone.classList.add('text-large');
    // Inject it into the DOM
    elem.after(clone);

    e.dataTransfer.setData("Text", e.target.id);
    console.log('text= '+e.dataTransfer.getData("Text"));
  }
  
  const dragEnd = (e) => {
    console.log("end");
    e.dataTransfer.setData("another", e.target.id);
  }
  
  const allowDrop = (event) =>{
    console.log("allow");
    event.preventDefault();
    event.target.style.border = "4px dotted green";
  }
  
  const changeNumOfMeals = (event) =>{
    console.log('i changeNumOfMeals');
    console.log('event.target.value: '+event.target.value);
    numOfMeals = event.target.value;
    // const m=event.target.value;
    // setNumOfMeals(event.target.value);
    // console.log('numOfMeals: ' +numOfMeals);
    createCardsForMeals();
  }

  const createCardsForMeals = () => {
    const warpMeals = document.getElementById('warpMeals');
    const divCard = document.getElementById('divCard');

    console.log('numOfMeals: ' +numOfMeals);
    //why it dont work even the numofmeal valid??
    let arr=Array(numOfMeals).fill(undefined);
    // arr.length=4;
    arr.forEach((el)=>
    {
      const clone = divCard.cloneNode(true);
      clone.id='divCardCopy';
      warpMeals.append(clone);
    })
  }
  
  return (
    <>
    <config></config>
    <Form.Group className="mb-3">
        <Form.Control name="numOfMeals " type="number" placeholder="num of ypur meals" min="1" max="15" onChange={(e) => changeNumOfMeals(e)}/>
    </Form.Group>
    <div id="warpMeals"></div> 
    {/* <div>
    <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Meal1</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text draggable={true} onDrop={e => handleDrop(e)} onDragOver={e=>allowDrop(e)}>
            grab on me to add categories on your mael
          </Card.Text>
        </Card.Body>
      </Card>
    </div> */}

    <div >
    <Card id="divCard" border="primary" style={{ width: '18rem' }}>
        <Card.Header>Meal2</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text draggable={true} onDrop={e => handleDrop(e)} onDragOver={e=>allowDrop(e)}>
            grab on me to add categories on your mael
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <Stack direction="horizontal" gap={4}>
    <div 
    onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="dragtarget2"
    >
      <Card >
        <Card.Body >Carbohydrates</Card.Body>
      </Card>
    </div>
    <div className="vr" />
    <div 
    onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="dragtarget3"
    >
      <Card>
        <Card.Body>Vegetables</Card.Body>
      </Card>
    </div>
    <div className="vr" />
    <div 
    onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="dragtarget4"
    >
      <Card>
        <Card.Body>Proteins</Card.Body>
      </Card>
    </div>
    <div className="vr" />
    <div
    onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="dragtarget5"
    >
      <Card>
        <Card.Body>Fat</Card.Body>
      </Card>
    </div>
    <div className="vr" />
    <div
    onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="dragtarget"
    >
      <Card>
        <Card.Body>Fruit</Card.Body>
      </Card>
    </div>
    <div className="vr" />
    <div  draggable={true} onDrop={e => handleDrop(e)} onDragOver={e=>allowDrop(e)} >
       ertyuioooooooooooooooooooooooooooooooooooooooooooooooo
    </div>
    <div  onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="dragtarget10">
      dfghjkl;'dfghjkl;'
    </div>
    </Stack>
    </>
  )
 }
export default MealUserUpdate;

{/* <>
    <Draggable grid={[10, 10]} axis='y' >
      <div className='card'>
          <h6>carbohydrates</h6>
          <img
            onClick={() => {
              console.log("click");
            }}
          />
      </div>
    </Draggable>
    </> */}
    
    //const [ball, setBall] = useState(document.createElement(<div></div>));

  //let ball = document.getElementById('ballop');
  // const setBall = () => 
  // {
  //   ball = document.getElementById('ballop'); 
  // }
  // const ball = document.getElementById('ballop');
  // if(ball)
  // {
  // ball.onmousemove = function(e) { 
  //   var x = e.clientX; 
  //   var y = e.clientY; 
  //   document.getElementById('ballop').style.marginLeft  = x+"px";
  //   document.getElementById('ballop').style.marginTop  = y+"px";
  // };
//   if(ball)
  // {

 
  // ball.onmousedown = function(event) 
  // {
  //   // (1) prepare to moving: make absolute and on top by z-index
  //   ball.style.position = 'absolute';
  //   ball.style.zIndex = 1000;
  
  //   // move it out of any current parents directly into body
  //   // to make it positioned relative to the body
  //   document.body.append(ball);
  
  //   // centers the ball at (pageX, pageY) coordinates
  //   function moveAt(pageX, pageY) {
  //     ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
  //     ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
  //   }
  
  //   // move our absolutely positioned ball under the pointer
  //   moveAt(event.pageX, event.pageY);
  
  //   function onMouseMove(event) {
  //     moveAt(event.pageX, event.pageY);
  //   }
  
  //   // (2) move the ball on mousemove
  //   document.addEventListener('mousemove', onMouseMove);
  
  //   // (3) drop the ball, remove unneeded handlers
  //   ball.onmouseup = function() {
  //     document.removeEventListener('mousemove', onMouseMove);
  //     ball.onmouseup = null;
  //   };

  //   ball.ondragstart = function() {
  //     return false;
  //   };
  
  // };


  // document.onmousemove = function(e) { 
  //   var x = e.clientX; 
  //   var y = e.clientY; 
  //   document.getElementById('ballop').style.marginLeft  = x+"px";
  //   document.getElementById('ballop').style.marginTop  = y+"px";
  // }
