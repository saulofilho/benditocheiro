import React from "react"
import Helmet from 'react-helmet'
import { withPrefix, graphql } from 'gatsby'
import Layout from "../components/Layout"
import Home from '../components/Home'
import About from '../components/About'
import Carousel from "../components/Carousel"
import Posts from "../components/Posts"
import Contato from '../components/Contato'

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  }
}) => {
  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <script src={withPrefix('script.js')} type="text/javascript" />
      </Helmet>
      <Home />
      <About />
      <Carousel />
      <Posts post={edges} />
      <Contato />
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {template: {eq: "ProdutoPost"}}}
      sort: { order: DESC, fields: [frontmatter___date] }
      ) {
      edges {
        node {
          fields {
            slug
          }
          id
          html
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            img
            title
            categoria
            preco
          }
        }
      }
    }
  }
`
