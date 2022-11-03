
import React from 'react';
import Carousel from "react-multi-carousel";
import Button from 'react-bootstrap/Button';
import 'react-multi-carousel/lib/styles.css';

const DetailsUserMeals =()=> 
{
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
            <Button onClick={() => next()} />
            <Button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </Button>
          </div>
        );
      };


    const d={
        deviceType: "mobile",
    } 
    return(
        <> 
        <h1>hello</h1>
        <Carousel  swipeable={false}
        draggable={false}
        showDots={true}
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
        itemClass="carousel-item-padding-40-px"  arrows={true} showDots={false}  customButtonGroup={<ButtonGroup />}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
        </Carousel>
  {/* <ItemOne>
  <ItemTwo> */}

        {/* <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
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
        itemClass="carousel-item-padding-40-px"
        > 
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
        </Carousel> */}
            {/* <div class="border"></div>
            <span className="border"></span>
            <span className="border-top"></span>
            <span className="border-end"></span>
            <span className="border-bottom"></span>
            <span className="border-start"></span> */}
        </>
    )
}
export default DetailsUserMeals;