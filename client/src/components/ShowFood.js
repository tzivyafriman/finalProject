import { useState, createContext, useContext } from "react";
import { Link } from 'react-router-dom';
import foodsList from '../data/Foods';
import AboutFood from './AboutFood';
import Carousel from "react-multi-carousel";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
// import 'react-multi-carousel/lib/styles.css';
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

import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Delete from '@mui/icons-material/Delete'; 

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
      //what the meaning of max and min ? ?
      breakpoint: { max: /*3000*/3000, min: /*1024*/1024 },
      items: 6
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

  const theme = useTheme();

  
  const [mealFoods, setMealFoods] = React.useState([]);
  // const mealFoods=[1,1,1];
  const count = 0;

  const addToMeal = (e) =>
  {
    console.log("e: "+e.name);
    if(mealFoods.indexOf(e) === -1)
    {
      setMealFoods(mealFoods => [...mealFoods, e])
    }else
    {
      alert("this food exists already")
    }
    
  }

  const deleteFromMeal = (f) =>
  {
    setMealFoods(mealFoods.filter( mf  => 
    { 
      //update by id or filed that not be equal to 2 items
      return mf.name !== f.name
    }));
  }


  return (
    <>
      <h1>hello | Nav place </h1>
      <Stack direction="horizontal" gap={3}>
        <div id="leftSide">
          <Carousel 
            swipeable={false}
            draggable={false}
            // showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={d.deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={1000}
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
                  <Card sx={{ maxWidth: 150 , maxHeight: 150}} >
                    <CardHeader sx={{ maxHeight: 40}}
                      avatar={
                      <>
                        <Avatar sx={{ maxWidth: 30 , maxHeight: 30, /*bgcolor: red[500]*/}} /*aria-label="recipe"*/>
                          {/* R */}
                          <IconButton sx={{ maxWidth: 30 , maxHeight: 30}} /*aria-label="recipe"*/
                          aria-label="settings"
                          onClick={handleShow}>
                          <MoreVertIcon />
                        </IconButton>
                        </Avatar>
                        <Avatar sx={{/* maxWidth: 30 , maxHeight: 30, bgcolor: red[500]*/}} aria-label="recipe">
                        {/* R */}
                        <IconButton aria-label="add to favorites" onClick={() => addToMeal(f)}>
                          <FavoriteIcon />
                        </IconButton>
                        </Avatar>
                      </>
                      }
                      /*action={
                        // icon details - 3 dots
                        <IconButton sx={{ maxWidth: 30 , maxHeight: 30}} aria-label="recipe"
                          aria-label="settings"
                          onClick={handleShow}>
                          <MoreVertIcon />
                        </IconButton>
                      }*/
                      title={f.name}
                      // subheader="September 14, 2016"
                    />
                    <CardMedia
                      component="img"
                      // אורך
                      height="100"
                      width="30"
                      image={f.picture}
                      //"https://m.media-amazon.com/images/I/71Zo1BD2k5L._AC_UL480_FMwebp_QL65_.jpg"
                      // image="https://write.geeksforgeeks.org/static/media/Group%20210.08204759.svg"
                      // alt="Paella dish"
                    />
                    {/* <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                      </Typography>
                    </CardContent> */}
                    {/* אני הסלשתי את כל CardActions
                    כי החלטתי שעיבית בשביל שיהיה מרחב לתמונה 
                    עדיף רק 2 איקונים למעלה 
                    כמובן שאפשר לשנות... */}
                    {/* <CardActions disableSpacing>
                      //icon heart
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      //icon 
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      //האייקון משולש - 
                      <ExpandMoreIcon /> */}
                      {/* <ExpandMore
                          expand={expanded}
                          onClick={handleExpandClick}
                          aria-expanded={expanded}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </ExpandMore> */}
                    {/* </CardActions> */}
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
            {/* <div>hjguj</div> */}
          </Carousel>
          <div>
            <br></br>
          </div>
          <Carousel 
            responsive={responsive} infinite={true} autoPlay={d.deviceType !== "mobile" ? true : false} autoPlaySpeed={1000} keyBoardControl={true} customTransition="all .5"
            transitionDuration={500} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px" arrows={true} >
            {
              foodsList.map(f =>
                <>
                  <Card sx={{ maxWidth: 150 , maxHeight: 150}} >
                    <CardHeader sx={{ maxHeight: 40}}
                      avatar={
                      <>
                        <Avatar sx={{ maxWidth: 30 , maxHeight: 30, /*bgcolor: red[500]*/}}>
                          <IconButton sx={{ maxWidth: 30 , maxHeight: 30}} 
                          aria-label="settings"
                          onClick={handleShow}>
                          <MoreVertIcon />
                        </IconButton>
                        </Avatar>
                        <Avatar sx={{maxWidth: 30 , maxHeight: 30, bgcolor: red[500]}}>
                          {console.log("f: "+f.name)}
                        <IconButton aria-label="add to favorites" onClick={() => addToMeal(f)}>
                          <FavoriteIcon />
                        </IconButton>
                        </Avatar>
                      </>
                      }
                      title={f.name}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      width="30"
                      image={f.picture }
                    />
                  </Card>
                </>)
            }
          </Carousel>
        </div>
        <div className="vr" />
        <div class="opositeDirection">
        <h3>my meal</h3>
        <div class="scroll" style={{ height: '70vh' }}>
        {
          mealFoods.map(f =>
            <>
            <Card sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography sx={{ width: 170 }} component="div" variant="h5">
                    {f.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    2 picece
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <Avatar sx={{ maxWidth: 30 , maxHeight: 30}}>
                  <IconButton aria-label="delete" size="lg" onClick={ () => deleteFromMeal(f)}><Delete/></IconButton></Avatar>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={f.picture}
                alt="Live from space album cover"
              />
            </Card>
            <div><br></br></div>
            </>)
        }
        </div>
        </div>
        
      </Stack>
      {/* </Stack> */}
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
