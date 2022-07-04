import React, { useEffect } from 'react'
import Helmet from 'react-helmet';
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import './blogTemplate.scss'
import AOS from 'aos';
import "aos/dist/aos.css";
import ModalImage from 'react-modal-image';

export default function Template({
  data,
}) {
  const post = data.markdownRemark

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name="description" content={post.frontmatter.metaDescription} />
      </Helmet>
      <div className="Blog-post container">
        <article className="post-row">
          <div className="post-col">
            <div className="post-imgs">
              <ModalImage
                small={post.frontmatter.img}
                large={post.frontmatter.img}
                alt={post.frontmatter.title}
              />
              {post.frontmatter.img_produto && post.frontmatter.img_produto.map(post => (
                <ModalImage
                  small={post.img_list}
                  large={post.img_list}
                />
              ))}
            </div>
          </div>
          <div className="post-col post-sticky">
            <h1>
              {post.frontmatter.title}
            </h1>
            <p className="blog-post-category">{post.frontmatter.categoria}</p>
            <p className="blog-post-price">R$ {post.frontmatter.preco}</p>
            <div className="site-wrapper">
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
          </div>
        </article>
        <div className="voltar">
          <Link to="/produtos">⟵ VOLTAR</Link>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        img
        title
        categoria
        preco
        img_produto {
          img_list
        }
      }
    }
  }
`
