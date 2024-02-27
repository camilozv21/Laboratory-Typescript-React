import Carousel from 'react-bootstrap/Carousel';
import anatomyPark from '../../assets/anatomypark.jpg';
import runing from '../../assets/running.jpg';
import swiming from '../../assets/swiming.jpg';

export const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={swiming}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={runing}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={anatomyPark}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}
