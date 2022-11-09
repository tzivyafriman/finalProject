import { useState, useRef, useEffect } from "react";
import Card from "react-bootstrap/Card";
function useDragging() {
  const [isDragging, setIsDragging] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  function onMouseMove(e) {
    if (!isDragging) return;
    setPos({
      x: e.x - ref.current.offsetWidth / 2,
      y: e.y - ref.current.offsetHeight / 2,
    });
    e.stopPropagation();
    e.preventDefault();
  }

  function onMouseUp(e) {
    setIsDragging(false);
    e.stopPropagation();
    e.preventDefault();
  }

  function onMouseDown(e) {
    if (e.button !== 0) return;
    setIsDragging(true);

    setPos({
      x: e.x - ref.current.offsetWidth / 2,
      y: e.y - ref.current.offsetHeight / 2,
    });

    e.stopPropagation();
    e.preventDefault();
  }

  // When the element mounts, attach an mousedown listener
  useEffect(() => {
    ref.current.addEventListener("mousedown", onMouseDown);

    return () => {
      ref.current.removeEventListener("mousedown", onMouseDown);
    };
  }, [ref.current]);

  // Everytime the isDragging state changes, assign or remove
  // the corresponding mousemove and mouseup handlers
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mousemove", onMouseMove);
    } else {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    }
    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [isDragging]);

  return [ref, pos.x, pos.y, isDragging];
}


const TryMe = () =>  {
  
const handleDrop = e => {
  console.log("drop on me");
  e.preventDefault();
  e.stopPropagation();
  var data = e.dataTransfer.getData("Text");
  e.target.appendChild(document.getElementById(data));
};

const dragStart = (e) => {
  console.log("start");
  e.dataTransfer.setData("Text", e.target.id);
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
  //change names of 2 first lines
  const [ref, x, y, isDragging] = useDragging();
  const [ref2, x2, y2, isDragging2] = useDragging();
  const [refFat, xFat, yFat, isDraggingFat] = useDragging();
  const [refProteins, xProteins, yProteins, isDraggingProteins] = useDragging();
  //const [refFruit, xFruit, yFruit, isDraggingFruit] = useDragging();

  return (
  <>
  {/* <html>
    <body>
    <div id="droptarget" onDrop={(e)=>ondrop(e)}>
    </div>
    </body>
  </html> */}
  {/* <p onDragStart={e=>dragStart(e)} draggable="true" id="dragtarget">Drag me into the rectangle!</p> */}
  
    <div  draggable={true} onDrop={e => handleDrop(e)} onDragOver={e=>allowDrop(e)} >
    <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Meal</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            add categories on your mael
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div
    ref={ref}
    style={{
      position: "absolute",
      // width: 100,
      // height: 100,
      background: isDragging ? "blue" : "gray",
      left: x,
      top: y,
    }}
    >
      <Card>
        <Card.Body>Carbohydrates</Card.Body>
      </Card>
    </div>

    <div
    ref={ref2}
    style={{
      position: "absolute",
      background: isDragging2 ? "blue" : "gray",
      left: x2,
      top: y2,
    }}
    >
      <Card>
        <Card.Body>Vegetables</Card.Body>
      </Card>
    </div>

    <div
    ref={refFat}
    style={{
      position: "absolute",
      background: isDraggingFat ? "blue" : "gray",
      left: xFat,
      top: yFat,
    }}
    >
      <Card>
        <Card.Body>Fat</Card.Body>
      </Card>
    </div>

    <div
    ref={refProteins}
    style={{
      position: "absolute",
      background: isDraggingProteins ? "blue" : "gray",
      left: xProteins,
      top: yProteins,
    }}
    >
      <Card>
        <Card.Body>Proteins</Card.Body>
      </Card>
    </div>

    <div
    onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="dragtarget2"
    //ref={refFruit}
    // style={{
    //   position: "absolute",
    //   background: isDraggingFruit ? "blue" : "gray",
    //   left: xFruit,
    //   top: yFruit,
    // }}
    >
      <Card>
        <Card.Body>Fruit</Card.Body>
      </Card>
    </div>

    <div
    onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="dragtarget">
      <Card>
        <Card.Body>tryGrab</Card.Body>
      </Card>
    </div>
  </>
  );
}

export default TryMe;


//<div id="droptarget" draggable={true} onDrop={e => handleDrop(e)} onDragOver={e=>allowDrop(e)}>ertyuiop</div>

// import React, { useRef, useState, useEffect } from 'react'
// import Card from 'react-bootstrap/Card';

// const quickAndDirtyStyle = {
//   width: "200px",
//   height: "200px",
//   background: "#FF9900",
//   color: "#FFFFFF",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center"
// }

// const TryMe = () => {
//   const [pressed, setPressed] = useState(false)
//   const [position, setPosition] = useState({x: 0, y: 0})
//   const ref = useRef()

//   // Monitor changes to position state and update DOM
//   useEffect(() => {
//     if (ref.current) {
//       ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
//     }
//   }, [position])

//   // Update the current position if mouse is down
//   const onMouseMove = (event) => {
//     if (pressed) {
//       setPosition({
//         x: position.x + event.movementX,
//         y: position.y + event.movementY
//       })
//     }
//   }

//   return (
//     <>
//     <div
//       ref={ ref }
//       style={ quickAndDirtyStyle }
//       onMouseMove={ onMouseMove }
//       onMouseDown={ () => setPressed(true) }
//       onMouseUp={ () => setPressed(false) }
//     >
//       <p>{ pressed ? "Dragging..." : "Press to drag" }</p>
//     </div>
//     <div
//     ref={ ref }
//     //style={ quickAndDirtyStyle }
//     onMouseMove={ onMouseMove }
//     onMouseDown={ () => setPressed(true) }
//     onMouseUp={ () => setPressed(false) }
//     >
//       <Card>
//         <Card.Body>grabbb me</Card.Body>
//       </Card>
//     </div>
//   </>
//   )
// }
// export default TryMe;