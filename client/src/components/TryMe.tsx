import * as React from 'react';
// import {state} from 'react';
import { EventTracker } from '@devexpress/dx-react-chart';
import Paper from '@mui/material/Paper';
import {
  BarSeries,
  Chart,
  Tooltip,
  ArgumentAxis,
  ValueAxis,
  Legend,
  Title,
  PieSeries,
} from '@devexpress/dx-react-chart-material-ui'
// import { Stack} from '@devexpress/dx-react-chart';
import { TypeOfExpression } from 'typescript';

import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/stack';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { SelectionState } from '@devexpress/dx-react-chart';
import { NavLink } from 'react-bootstrap';

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

    const [counter, setCounter] = useState(1);

    const [current, setCurrent] = useState('');
    const [countOfCategories, setCountOfCategories] = useState(0);
    const [categoriesArea, setCategoriesArea]=useState({
      Carbohydrates: 0,
      Vegetables: 0,
      Proteins: 0,
      Fat: 0,
      Fruit: 0
    });
    
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
      // setChartData({...chartData},{chartData});
    }
    
    const dragEnd = (e: React.DragEvent<HTMLDivElement>) => {
      console.log("end");
      let idElement = (e.target as HTMLDivElement).id;
      e.dataTransfer.setData("another", (e.target as HTMLDivElement).id);
      handleChangeCategoriesArea(e);
    }

    const allowDrop = (e: React.DragEvent<HTMLDivElement>) =>{
      console.log("allow");
      e.preventDefault();
      //(e.target as HTMLDivElement).style.border = "4px dotted green";
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
      // handleChangeCategoriesArea(e);
    };

    const chartData = [
      { categories: 
        <div 
        onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="Carbohydrates"
        >
          <Card /*style={{ backgroundColor: 'green' }}*/ >
            <Card.Body >Carbohydrates</Card.Body>
          </Card>
        </div>, area: categoriesArea.Carbohydrates },
      { categories: 
        <div 
        onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="Vegetables"
        >
          <Card>
            <Card.Body>Vegetables</Card.Body>
          </Card>
        </div>, area: categoriesArea.Vegetables },
      { categories: 
        <div 
        onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="Proteins"
        >
          <Card>
            <Card.Body>Proteins</Card.Body>
          </Card>
        </div>, area: categoriesArea.Proteins },
      { categories: 
        <div
        onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="Fat"
        >
          <Card>
            <Card.Body>Fat</Card.Body>
          </Card>
        </div>, area: categoriesArea.Fat },
      { categories: 
        <div
        onDragStart={e=>dragStart(e)} onDragEnd={e=>dragEnd(e)} draggable="true" id="Fruit"
        >
          <Card>
            <Card.Body>Fruit</Card.Body>
          </Card>
        </div>, area: categoriesArea.Fruit },
    ];

    const mytrydata = [
      { year: '1950', population: 2.525 },
      { year: '1960', population: 3.018 },
      { year: '1970', population: 3.682 },
      { year: '1980', population: 4.440 },
      { year: '1990', population: 5.310 },
      { year: '2000', population: 6.127 },
      { year: '2010', population: 6.930 },
    ];
    const [helpCharData, setHelpCharData] = useState(chartData);

    React.useEffect(() => {
      // console.log('i useEffect');
      // console.log("countOfCategories: "+countOfCategories);
      // console.log("current: "+current);
      setCategoriesArea({
        ...categoriesArea,
        ["Carbohydrates"]: (categoriesArea.Carbohydrates != 0) ? countOfCategories : 0,
        ["Proteins"]: (categoriesArea.Proteins != 0) ? countOfCategories : 0,
        ["Vegetables"]: (categoriesArea.Vegetables != 0) ? countOfCategories : 0,
        ["Fat"]: (categoriesArea.Fat != 0) ? countOfCategories : 0,
        ["Fruit"]: (categoriesArea.Fruit != 0) ? countOfCategories : 0,
        [current]: countOfCategories,
      });
      
    }, [countOfCategories, current]);

    const handleChangeCategoriesArea = /*async*/(e: React.DragEvent<HTMLDivElement>) => 
    {
      //its work by useeffect, i think it had to work with async await function. but its not work me
      /*await*/ setCountOfCategories((countOfCategories!=0) ? 100/(100/countOfCategories+1) : 100);
      setCurrent((e.target as HTMLDivElement).id);
    };

    const stacks = [
      { series: ['👶 Young', '🧑 Adult', '🧓 Old'] },
    ];

    return (
      <>
      <Stack direction="horizontal" gap={3}/*style={{ textAlign : 'center'}} style={{paddingLeft: '250px'}}*/>
      {/* navigate */}
      <div >
      <Chart width={200} height={200} 
          data={helpCharData}
        >
          <PieSeries
            valueField="area"
            argumentField="categories"
          />
          <Stack /*id="center"*/>
            <Legend />
          </Stack>
      </Chart>
      </div>

      {/* <Form.Group className="mb-3">
        <Card.Text>how much meals do you eat in day? </Card.Text>
        <Form.Control name="numOfMeals " type="number" placeholder="num of ypur meals" min="1" max="15" onChange={(e) => changeNumOfMeals(e)}/>
      </Form.Group> */}

      <div /*className="bg-light border"*/ >
        <Card id="divCard" /*border="primary"*/ style={{ width: '18rem' }}>
          <Card.Header>
            <Form.Group className="mb-3" /*controlId="formBasicEmail"*/>
                <Form.Control name="MealName" type="text" placeholder="MealName" /*onChange={(e) => handleChange(e)}*//>
            </Form.Group></Card.Header>
          <Card.Body>
            <Card.Text  style={{backgroundColor: '#9c9a9a4f'}} draggable={true} onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e)} onDragOver={(e: React.DragEvent<HTMLDivElement>)=>allowDrop(e)}>
              grab on me to add categories on your mael
            </Card.Text>
            <div /*draggable={true} onDrop={e => handleDrop(e)} onDragOver={e=>allowDrop(e)}*/>
            <Chart width={200} height={200} rotated={true}  
              data={chartData}
            >
              <PieSeries
                valueField="area"
                argumentField="categories"
              />
              <EventTracker />
              <Tooltip />
            </Chart>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div /*className="bg-light border"*/ >
        <Card id="divCard" /*border="primary"*/ style={{ width: '18rem' }}>
          <Card.Header>
            <Form.Group className="mb-3" /*controlId="formBasicEmail"*/>
                <Form.Control name="MealName" type="text" placeholder="MealName" /*onChange={(e) => handleChange(e)}*//>
            </Form.Group></Card.Header>
          <Card.Body>
            <Card.Text  style={{backgroundColor: '#9c9a9a4f'}} draggable={true} onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e)} onDragOver={(e: React.DragEvent<HTMLDivElement>)=>allowDrop(e)}>
              grab on me to add categories on your mael
            </Card.Text>
            <div /*draggable={true} onDrop={e => handleDrop(e)} onDragOver={e=>allowDrop(e)}*/>
            <Chart width={200} height={200} rotated={true}  
              data={chartData}
            >
              <PieSeries
                valueField="area"
                argumentField="categories"
              />
              <EventTracker />
              <Tooltip />
            </Chart>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="bg-light border" draggable={true} onDrop={e => handleDrop(e)} onDragOver={e=>allowDrop(e)}>
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

      {/* <Paper > */}
        
      </Stack>
      {/* </Paper> */}

      {/* <div style={{paddingLeft: '250px'}} draggable={true} onDrop={e => handleDrop(e)} onDragOver={e=>allowDrop(e)}>
      <Chart width={200} height={200} rotated={true}  
          data={chartData}
      >
        <PieSeries
          valueField="area"
          argumentField="categories"
        />
      </Chart>
      </div> */}
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

    // <div>
    //   <Chart width={200} height={200} 
    //       data={mytrydata}
    //     >
    //       <PieSeries
    //         valueField="population"
    //         argumentField="year"
    //       />
    //       <EventTracker />
    //       <Tooltip />
    //   </Chart></div>