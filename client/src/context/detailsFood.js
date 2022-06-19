import React from "react";
// import axios from 'axios';
export const DetailsFood = React.createContext({});

export const detailsFoodProvider = (props) => {
    // const p=props;
    const contextvalue ={
        details: props
    }



return <DetailsFood.Provider value={contextvalue}>
    {props.children}
</DetailsFood.Provider>
}
