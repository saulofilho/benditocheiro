import React, { useState, useEffect } from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import './Produtos.scss'
import PostSection from "../components/PostSection"

const Trabalhos = ({
  data: {
    allMarkdownRemark: { edges }
  },
}) => {
  const posts = edges.map(edge => ({ ...edge.node }))

  const [data, setData] = useState([...posts]);

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <Layout>
      <div className="produtos-home container">
        <div className="produtos-wrapper">
          <h1>
            Lorem Ipsum
          </h1>
          <p>
            The standard Lorem Ipsum passage, used since the 1500s
          </p>
        </div>
        <PostSection posts={data} />
      </div>
    </Layout>
  )
}

export default Trabalhos
export const pageQuery = graphql`
  query TrabalhosQuery {
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
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
            img
          }
        }
      }
    }
  }
`
