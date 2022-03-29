import React from 'react'
import Layout from "../components/Layout"
import './Clientes.scss'

import Image from '../../static/assets/images/generative.jpg'

const Clientes = () => {
  return (
    <Layout>
      <div className="clientes-wrapper container">
        <h1>Lorem Ipsum</h1>
        <div className="nossos-clientes-logos">
          <img src={Image} alt="cliente logo" />
          <img src={Image} alt="cliente logo" />
          <img src={Image} alt="cliente logo" />
          <img src={Image} alt="cliente logo" />
          <img src={Image} alt="cliente logo" />
          <img src={Image} alt="cliente logo" />
          <img src={Image} alt="cliente logo" />
          <img src={Image} alt="cliente logo" />
          <img src={Image} alt="cliente logo" />
        </div>
      </div>
    </Layout>
  )
}

export default Clientes
