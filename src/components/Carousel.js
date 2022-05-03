import React, { useEffect } from 'react'
import Slider from "react-slick"
import './Carousel.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Chapada from '../../static/assets/default-img.jpg'
import Nobres from '../../static/assets/default-img.jpg'
import Pantanal from '../../static/assets/default-img.jpg'
import Araguaia from '../../static/assets/default-img.jpg'
import Barra from '../../static/assets/default-img.jpg'
import AOS from 'aos';
import "aos/dist/aos.css";

const Carousel = () => {
  const settings = {
    className: "slider variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 440,
        settings: {
          variableWidth: false,
          centerMode: false,
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
              backgroundImage: `url(${Chapada})`
            }}
            alt="foto da chapada dos guimaraes"
          >
          </div>
          <p className="car-text">
            Chapada dos Guimarães
          </p>
        </div>
        <div>
          <div
            className="car-items-wrapper"
            style={{
              backgroundImage: `url(${Nobres})`
            }}
            alt="foto de Nobres"
          >
          </div>
          <p className="car-text">
            Nobres
          </p>
        </div>
        <div>
          <div
            className="car-items-wrapper"
            style={{
              backgroundImage: `url(${Araguaia})`
            }}
            alt="foto do Araguaia"
          >
          </div>
          <p className="car-text">
            Alto Araguaia
          </p>
        </div>
        <div>
          <div
            className="car-items-wrapper"
            style={{
              backgroundImage: `url(${Barra})`
            }}
            alt="foto do Barra"
          >
          </div>
          <p className="car-text">
            Barra do Garças
          </p>
        </div>
        <div>
          <div
            className="car-items-wrapper"
            style={{
              backgroundImage: `url(${Pantanal})`
            }}
            alt="foto do Pantanal"
          >
          </div>
          <p className="car-text">
            Pantanal
          </p>
        </div>
      </Slider>
    </section>
  )
}

export default Carousel
