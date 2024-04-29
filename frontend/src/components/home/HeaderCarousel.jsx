import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/carousel/image1.webp';
import image2 from '../../assets/carousel/image2.webp';
import image3 from '../../assets/carousel/image3.webp';

function HeaderCarousel() {
  return (
    <Carousel className='mt-2 mb-2' interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HeaderCarousel;
