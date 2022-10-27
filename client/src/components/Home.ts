import React, { Component } from 'react';

type CounterProps = {
  header: string;
};

type CounterState = {
  value: number;
};

class Counter extends React.Component {

  state: CounterState = {
    value: 0,
  };

  render(){
    
  }
//   render() {
//     //const { header } = this.props;
//     const { value } = this.state;

//     return (
//       <div>
//       {myheader}
//       </div>
//   );
//   }
}