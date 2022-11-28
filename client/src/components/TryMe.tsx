import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  BarSeries,
  Chart,
  ArgumentAxis,
  ValueAxis,
  Legend,
  Title,
  PieSeries,
} from '@devexpress/dx-react-chart-material-ui';
// import { Stack} from '@devexpress/dx-react-chart';
import { TypeOfExpression } from 'typescript';

import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/stack';
import { useState } from 'react';

const data = [
  { country: 'Russia', area: 12 },
  { country: 'Canada', area: 7 },
  { country: 'USA', area: 7 },
  { country: 'China', area: 7 },
  { country: 'Brazil', area: 6 },
  { country: 'Australia', area: 5 },
  { country: 'India', area: 2 },
  { country: 'Others', area: 55 },
];

const dataTypes = [ " ", 0];

export const TryMe =()=> {
  // constructor(props: {
  //   country: string;
  //   area: number;
  //   }[]
  // ) {
  //   super(props);

  //   this.state = {
  //     data,
  //   };
  // }

  // render() {
    // const { data: chartData } = this.state;

    const [counter, setCounter] = useState(1);
    
    const dragStart = (e: React.DragEvent<HTMLDivElement>) => {

      console.log("start");
      const basicElem = document.getElementById((e.target as HTMLDivElement)?.id);
      console.log(basicElem as HTMLElement);
      const elem = basicElem?.closest('div');
      const clone = elem?.cloneNode(true);
      (clone as HTMLElement).id = 'elem'+/*counter*/5;
      setCounter(/*counter+1*/5);
      elem?.after(clone as HTMLElement);
      // elem?.after(e.target as HTMLDivElement);
      basicElem?.after(e.target as HTMLDivElement);
      e.dataTransfer.setData("Text", (e.target as HTMLDivElement).id);
      console.log('text= '+e.dataTransfer.getData("Text"));
    }
    
    const dragEnd = (e: React.DragEvent<HTMLDivElement>) => {
      console.log("end");
      let idElement = (e.target as HTMLDivElement).id;
      e.dataTransfer.setData("another", (e.target as HTMLDivElement).id);
    }

    const allowDrop = (e: React.DragEvent<HTMLDivElement>) =>{
      console.log("allow");
      e.preventDefault();
      (e.target as HTMLDivElement).style.border = "4px dotted green";
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      console.log("drop on me");
      e.preventDefault();
      var data = e.dataTransfer.getData("Text");
      console.log("data: "+data);
      if(data!="")
      {
        (e.target as HTMLDivElement).appendChild(document.getElementById(data) as HTMLDivElement);
      }
    };

    const chartData = [
      { categories: 
        <div 
        onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="dragtarget2"
        >
          <Card style={{ backgroundColor: 'green' }} >
            <Card.Body >Carbohydrates</Card.Body>
          </Card>
        </div>, area: 50 },
      { categories: 
        <div 
        onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="dragtarget3"
        >
          <Card>
            <Card.Body>Vegetables</Card.Body>
          </Card>
        </div>, area: 50 },
      { categories: 
        <div 
        onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="dragtarget4"
        >
          <Card>
            <Card.Body>Proteins</Card.Body>
          </Card>
        </div>, area: 7 },
      { categories: 
        <div
        onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="dragtarget5"
        >
          <Card>
            <Card.Body>Fat</Card.Body>
          </Card>
        </div>, area: 7 },
      { categories: 
        <div
        onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="dragtarget"
        >
          <Card>
            <Card.Body>Fruit</Card.Body>
          </Card>
        </div>, area: 6 },
      // { country: 'Australia', area: 5 },
      // { country: 'India', area: 2 },
      // { country: 'Others', area: 55 },
    ];
    const stacks = [
      { series: ['👶 Young', '🧑 Adult', '🧓 Old'] },
    ];

    return (
      <>
      <Stack gap={2}/*style={{ textAlign : 'center'}}*/ style={{paddingLeft: '250px'}}>
      <div draggable={true} onDrop={e => handleDrop(e)} onDragOver={e=>allowDrop(e)}>
        <Card id="divCard" border="primary" style={{ width: '18rem' }}>
            <Card.Header>Meal1</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text >
                grab on me to add categories on your mael
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
      <div draggable={true} onDrop={e => handleDrop(e)} onDragOver={e=>allowDrop(e)}>
        <Card id="divCard" border="primary" style={{ width: '18rem' }}>
            <Card.Header>Meal2</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text >
                grab on me to add categories on your mael
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
      </Stack>
      //navigate
      <Paper >
        <Chart width={200} height={200} 
          data={chartData}
        >
          <PieSeries
            valueField="area"
            argumentField="categories"
          />
          
          <Stack id="center">
            <Legend />
          </Stack>
        </Chart>
      </Paper>

      <div style={{paddingLeft: '250px'}} draggable={true} onDrop={e => handleDrop(e)} onDragOver={e=>allowDrop(e)}>
      <Chart width={200} height={200} rotated={true}  
          data={chartData}
      >
        <PieSeries
          valueField="area"
          argumentField="categories"
        />
      </Chart>
      </div>
      </>
    );
  // }
}

// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import {
//   ArgumentAxis,
//   ValueAxis,
//   BarSeries,
//   Chart,
//   LineSeries,
// } from '@devexpress/dx-react-chart-material-ui';
// import { ValueScale } from '@devexpress/dx-react-chart';

// interface IDataItem {
//   month: string,
//   sale: number,
//   total: number,
// }

// const chartData: IDataItem[] = [
//   { month: 'Jan', sale: 50, total: 987 },
//   { month: 'Feb', sale: 100, total: 3000 },
//   { month: 'March', sale: 30, total: 1100 },
//   { month: 'April', sale: 107, total: 7100 },
//   { month: 'May', sale: 95, total: 4300 },
//   { month: 'June', sale: 150, total: 7500 },
// ];

// export default class TryMe extends React.Component<object, object> {
  
//   public render(): React.ReactNode {
//     return (
//       <Paper>
//         <Chart
//           data={chartData}
//         >
//           <ValueScale name="sale" />
//           <ValueScale name="total" />

//           <ArgumentAxis />
//           <ValueAxis scaleName="sale" showGrid={false} showLine={true} showTicks={true} />
//           <ValueAxis scaleName="total" position="right" showGrid={false} showLine={true} showTicks={true} />

//           <BarSeries
//             name="Units Sold"
//             valueField="sale"
//             argumentField="month"
//             scaleName="sale"
//           />

//           <LineSeries
//             name="Total Transactions"
//             valueField="total"
//             argumentField="month"
//             scaleName="total"
//           />
//         </Chart>
//       </Paper>
//     );
//   }
// }



// export const TryMe = (props: any) =>
// {
  
//   return (
//   <>
  
//   </>
//   );
// }


// export default TryMe;