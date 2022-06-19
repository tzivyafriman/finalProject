import React, { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { DetailsFood } from "../context/detailsFood";
// import food from './ShowFood'
import { FoodContext } from './ShowFood'
const AboutFood = (props) => {
    // const { showAbouteFoodModal, setShowAbouteFoodModal } = props;
    // const [show, setShow] = useState(setShowAbouteFoodModal);
    // const currentFood = useContext(FoodContext);
    const location = useLocation();
    const [currentFood, setCurrentFood] = useState();
    // const { food } = useContext(DetailsFood);
    // const currentFood = FoodContext
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const handleShow = () => setShow(true);

    // function handleClose() {
    //     setShowAbouteFoodModal(false);
    // }

    useEffect(() => {
        setCurrentFood(location.state);
    }, [location.state])

    return (
        <>
            {currentFood ? 
            <div>
                
                <div>{currentFood.name}</div>
                <div>{currentFood.Calories}</div>
                <p>wow tzivya!!!!!  great!  keep going.....  :)</p>
            </div>
                : ""}
            {/* <Modal show={showAbouteFoodModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>Modalllll</h1>            </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>
    )
}
export default AboutFood;


