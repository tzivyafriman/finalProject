import React, {useState, useEffect} from "react";

import {config} from '../config';
import axios from 'axios';

export const SigIn = () => {

    const [Name, setUsername] = useState('tzivya');
    const funcName = async() =>{
            // try{
                setUsername( await axios.get(`${config.api}`));
               console.log(Name);
                // setUser(user);
            // }catch(error){
            //     alert('error to sign in')
            // }
        }      
   
//     const [password, setPassword] = useState('');
   
//     const [user, setUser] = useState({});
//     const innerSignin = (e) => {

//         e.preventDefault();
//         console.log('aboout to sign' , Name, password);
//           signin(Name, password);
//     }
// const Id = "vdgvdge";
// const signin = async(username, password) =>{
//     try{
//         const {data: user} = await axios.post(`${config.api}user`, {
//             Id,
//             Name,
//         }); 
//         setUser(user);
//     }catch(error){
//         alert('error to sign in')
//     }


// return(
//     <div> hello i sign in</div>
// )
return(<div>
    {funcName()
    }
</div>
)

    {/* onSubmit={(e) => innerSignin(e)} */}
    {/* <input type="text" value={Name} onChange={e => setUsername(e.target.value)}/><br/>
    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/><br/> */}


}
export default SigIn;