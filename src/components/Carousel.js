import React, { useEffect } from 'react'
import Slider from "react-slick"
import './Carousel.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import LiquidoIMG from '../../static/assets/images/liquido.jpg'
import FormasRawIMG from '../../static/assets/images/formas-raw.jpg'
import BatonsIMG from '../../static/assets/images/batons-rotulo-front.jpg'
import FormasIMG from '../../static/assets/images/formas.jpg'
import BatonsSkyIMG from '../../static/assets/images/batons-sky.jpg'
import AOS from 'aos';
import "aos/dist/aos.css";

const Carousel = () => {
  const settings = {
    className: "slider variable-width",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    dots: false,
    autoplay: false,
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
        <h1 className="title">Veja as etapas de criação da Bendito Cheiro Art.</h1>
        <div className="sobre-row">
          <div className="sobre-col">
          </div>
          <div className="sobre-col">
            <p className="text">
              A Bendito nasceu de um sonho: criar composições que cuidam das pessoas,
              dos animais e da natureza.
              Eu sou a Bendito e proponho um novo olhar ao cuidado,
              com respeito pelo meio ambiente e praticidade para uma rotina sustentável possível.
            </p>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div
            className="car-items-wrapper"
            style={{
              backgroundImage: `url(${LiquidoIMG})`
            }}
            alt="foto da defaultImg dos LiquidoIMG"
          >
          </div>
          <p className="car-text">
            Temos orgulho de incentivar o consumo consciente com produtos 100% veganos,
            sustentáveis, livre de ingredientes nocivos e de crueldade animal.
          </p>
        </div>
        <div>
          <div
            className="car-items-wrapper"
            style={{
              backgroundImage: `url(${FormasRawIMG})`
            }}
            alt="foto de FormasRawIMG"
          >
          </div>
          <p className="car-text">
            Sou feita de matérias e ideias revolucionárias, e venho como porta-voz de um sonho:
            o sonho de equilibrar nosso estilo de vida, que tanto amamos.
          </p>
        </div>
        <div>
          <div
            className="car-items-wrapper"
            style={{
              backgroundImage: `url(${BatonsIMG})`
            }}
            alt="foto do BatonsIMG"
          >
          </div>
          <p className="car-text">
            A Bendito vem inovando, com seus produtos artesanais, naturais e veganos.
            Como os sólidos: shampoos, condicionadores, hidratantes…
          </p>
        </div>
        <div>
          <div
            className="car-items-wrapper"
            style={{
              backgroundImage: `url(${FormasIMG})`
            }}
            alt="foto do FormasIMG"
          >
          </div>
          <p className="car-text">
            Um deles é o queridinho shampoo sólido, que é constituído por pouco ou
            nenhum aditivo químico, portanto não leva parabenos, sulfatos,
            conservantes e corantes em sua composição. Assim, a versão em barra hidrata,
            limpa, regula a oleosidade e dá brilho aos fios sem agredir o couro cabeludo.
          </p>
        </div>
        <div>
          <div
            className="car-items-wrapper"
            style={{
              backgroundImage: `url(${BatonsSkyIMG})`
            }}
            alt="foto do BatonsSkyIMG"
          >
          </div>
          <p className="car-text">
            Usamos as embalagens bio e nossos produtos são sem: Sal, Sulfato,
            Lauril, Parabenos, Sem corante artificial.
          </p>
        </div>
      </Slider>
    </section>
  )
}

export default Carousel
