import react  from "react";
import { Link, Outlet  } from "react-router-dom";
import { ShowFood } from './ShowFood';

export const food=(props)=>{
    const { f } = props;
    return(
    <>
        <p>{f.name}</p>
       {/* <Link to={"/detailsFood/" + (i + 1)}>{i + 1} </Link> */}
    </>
    );
}

