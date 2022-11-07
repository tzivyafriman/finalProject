import { useState, createContext, useContext } from "react";
import { Link } from 'react-router-dom';
import foodsList from '../data/Foods';
import AboutFood from './AboutFood';
import Carousel from "react-multi-carousel";
import Button from 'react-bootstrap/Button';
import 'react-multi-carousel/lib/styles.css';
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// card
import * as React from 'react';
import { RecipeReviewCard } from './card-delete';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from "@emotion/styled";


// 

export const ShowFood = () => {
  // modal
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [currentFood, setCurrentFood] = useState("bread");
  // const FoodContext = createContext();

  const [showAbouteFoodModal, setShowAbouteFoodModal] = useState(false);

  // const func = (f) => {
  //     setCurrentFood(f);
  //     console.log(f)
  // }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group"> // remember to give it position:absolute
        <Button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
        <Button onClick={() => next()} >next</Button>
        <Button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </Button>
      </div>
    );
  };
  const d = {
    deviceType: "mobile",
  }

  // card
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <h1>hello</h1>
      <Carousel
        swipeable={false}
        draggable={false}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={d.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //      deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px" arrows={true} showDots={false}  >
        {
          foodsList.map(f =>
            <>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    // icon details - 3 dots
                    <IconButton
                      aria-label="settings"
                      onClick={handleShow}>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={f.name}
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  // אורך
                  height="70"
                  width="70"
                  image="https://write.geeksforgeeks.org/static/media/Group%20210.08204759.svg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  {/* icon heart */}
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  {/* icon \/  */}
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  {/* האייקון משולש -  */}
                  <ExpandMoreIcon />
                  {/* <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore> */}
                </CardActions>
                {/* לא שימושי לנו במצב של js   */}
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    {/* הרעיון של זה - התחלת קטע חדש */}
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                      aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                      medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                      occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                      large plate and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                      stirring often until thickened and fragrant, about 10 minutes. Add
                      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with artichokes and
                      peppers, and cook without stirring, until most of the liquid is absorbed,
                      15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                      mussels, tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just tender, 5 to 7
                      minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
              {/* <div>item 3</div>
                            <h3>{f.name}</h3> */}
              {/* <img className="img" src={f.picture}></img>
                            <button onClick={() => setShowAbouteFoodModal(true)}>More Details</button>
                            <Link to='/aboutFood' state={f} >aboutFood</Link> */}
            </>
          )
        }
        <div>hjguj</div>
      </Carousel>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {/* ע"מ שנוכל לשים פה את שם המאכל וכו, צריך לשים את המודל בתוך ה foreach  , מה שמגוחך בעיני וכן מחשיך את המסך מתחת מאוד!! */}
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
      {/* <div className="foodsDiv"> */}
      {/* <FoodContext.Provider value={currentFood}>

                </FoodContext.Provider> */}
      {/* {
                    foodsList.map(f =>
                        <>

                            <h3>{f.name}</h3>
                            <img className="img" src={f.picture}></img>
                            <button onClick={() => setShowAbouteFoodModal(true)}>More Details</button>
                            <Link to='/aboutFood' state={f} >aboutFood</Link>
                        </>
                    )
                } */}

      {/* <AboutFood
                    showAbouteFoodModal={showAbouteFoodModal}
                    setShowAbouteFoodModal={setShowAbouteFoodModal} /> */}

      {/* </div> */}
    </>
  )
}
export const FoodContext = createContext(
  ShowFood.currentFood
)
