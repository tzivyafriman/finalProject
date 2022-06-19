import { useState, createContext, useContext } from "react";
import { Link } from 'react-router-dom';
import foodsList from '../data/Foods';
import AboutFood from './AboutFood';


export const ShowFood = () => {
    const [currentFood, setCurrentFood] = useState("bread");
    // const FoodContext = createContext();

    const [showAbouteFoodModal, setShowAbouteFoodModal] = useState(false);

    // const func = (f) => {
    //     setCurrentFood(f);
    //     console.log(f)
    // }
    
    return (
        <div className="foodsDiv">
            {/* <FoodContext.Provider value={currentFood}>

            </FoodContext.Provider> */}
            {
                foodsList.map(f =>
                    <>

                        <h3>{f.name}</h3>
                        <img className="img" src={f.picture}></img>
                        <button onClick={() => setShowAbouteFoodModal(true)}>More Details</button>
                        <Link to='/aboutFood' state={f} >aboutFood</Link>
                    </>
                )
            }

            {/* <AboutFood
                showAbouteFoodModal={showAbouteFoodModal}
                setShowAbouteFoodModal={setShowAbouteFoodModal} /> */}

        </div>

    )
}
export const FoodContext = createContext(
    ShowFood.currentFood
)
