import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

//CSS
import "./Carrousel.css"

//Images
import pizza1 from "../../Image/Carousel/pizza1.jpg"
import pizza2 from "../../Image/Carousel/pizza2.jpg"
import pizza3 from "../../Image/Carousel/pizza3.jpg"

const Carrousel = () => {
    return (
        <div className='containerCarrosel'>
            <Carousel>
                <Carousel.Item>
                    <img
                        src={pizza1}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={pizza2}
                        alt="Second slide"
                    />
                    {/* <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={pizza3}
                        alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carrousel