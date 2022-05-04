import React, { useEffect } from 'react'
import Slider from "react-slick"
import './Carousel.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import defaultImg from '../../static/assets/default-img.jpg'
import AOS from 'aos';
import "aos/dist/aos.css";

const Carousel = () => {
  const settings = {
    className: "slider variable-width",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    variableWidth: true,
    edgeFriction: 1,
    swipeToSlide: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 440,
        settings: {
          variableWidth: false,
          centerMode: false,
          infinite: true,
        }
      }
    ]
  };

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <section>
      <div className="carousel-wrapper container">
        <h1 data-aos="fade-up">Como funciona a bendito cheiro</h1>
        <div className="sobre-row">
          <div className="sobre-col">
          </div>
          <div className="sobre-col">
            <p data-aos="fade-down">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div
            className="car-items-wrapper"
            style={{
              backgroundImage: `url(${defaultImg})`
            }}
            alt="foto da defaultImg dos guimaraes"
          >
          </div>
          <p className="car-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div>
          <div
            className="car-items-wrapper"
            style={{
              backgroundImage: `url(${defaultImg})`
            }}
            alt="foto de defaultImg"
          >
          </div>
          <p className="car-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div>
          <div
            className="car-items-wrapper"
            style={{
              backgroundImage: `url(${defaultImg})`
            }}
            alt="foto do defaultImg"
          >
          </div>
          <p className="car-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div>
          <div
            className="car-items-wrapper"
            style={{
              backgroundImage: `url(${defaultImg})`
            }}
            alt="foto do defaultImg"
          >
          </div>
          <p className="car-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div>
          <div
            className="car-items-wrapper"
            style={{
              backgroundImage: `url(${defaultImg})`
            }}
            alt="foto do defaultImg"
          >
          </div>
          <p className="car-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </Slider>
    </section>
  )
}

export default Carousel
