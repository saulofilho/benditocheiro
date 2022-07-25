import React, { useEffect } from 'react'
import './About.scss'
import AboutIMG from '../../static/assets/images/sabonetes.jpg'
import AOS from 'aos';
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <div className="sobre-wrapper container" id="sobre">
      <h1 className="title">Você já conhece a Bendito Cheiro Art?</h1>
      <div className="sobre-row">
        <div className="sobre-col">
          <img src={AboutIMG} alt="sobre somos nós foto" className="img-about" data-aos="fade-up"/>
        </div>
        <div className="sobre-col">
          <p className="text">
          A Bendito Cheiro Art foi criada por uma mulher desde de 2017, que ama colorir a vida com seu pincel,
          da telas para a maquiagem e aroma foi um estalar de dedos.
          <br />
          <br />
          Dejanira, mais conhecida como Deja é a fundadora da Bendito Cheiro,
          artista plástica, está no sangue o gosto pela arte e cor.
          <br />
          <br />
          Por isso resolveu colorir as pessoas com sua maquiagem multifuncional sólida e vegana artesanal.
          <br />
          <br />
          Não bastou só colorir as pessoas, ela queria mais, perfumá-las, resolveu aprofundar nos conhecimentos, hoje ela produz maquiagens,
          shampoos, condicionadores e outros produtos artesanais e vegana.
          <br />
          <br />
          Além de tudo isso, ainda cria seu aroma com o marketing olfativo para você ou para sua empresa.
          São muitos aromas e cores.Sempre preocupada com as pessoas, animais e com o meio ambiente, por isso suas embalagens são BIO.
          <br />
          <br />
          <br />
          <strong>Como funciona ou nossa missão?</strong>
          <br />
          <br />
          A Bendito quer passar boas sensações  para seus clientes, colaboradores e fornecedores prezando sempre
          pela natureza e agregando seus benefícios aos nossos produtos. Valorizamos o que vem da terra e as pessoas que
          extraem da terra com sustentabilidade e fazem dela e da arte sua fonte de renda, por isso, nossas principais
          matérias primas naturais são compradas de pequenas cooperativas.
          <br />
          <br />
          <br />
          <strong>Produtos Bendito Cheiro para:</strong>
          <br />
          <br />
          Corpo
          <br />
          Cabelo
          <br />
          Skincare
          <br />
          Casa
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
