import React, { useEffect } from 'react'
import PostLink from "./PostLink"
import './Products.scss'
import AOS from 'aos';
import "aos/dist/aos.css";

const Products = ({ post }) => {
  const Posts = post
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <div className="products-wrapper container" id="produtos">
      <h1 data-aos="fade-up">Produtos bendito cheiro</h1>
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
      <div className="posts-list" data-aos="fade-up">
        {Posts}
      </div>
    </div>
  )
}

export default Products
