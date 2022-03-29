import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import './Cinema-tv.scss'

const CinemaTV = ({
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
      <div className="cinematv-wrapper container">
        <div className="cine-header-wrapper">
          <h1>Lorem Ipsum</h1>
          <p>
            Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
          </p>
        </div>
        {data && data.map(el =>
          <section className="cinema-project-wrapper" key={el.id}>
            <img src={el.frontmatter.img} alt="img about project" />
            <h2>
              {el.frontmatter.title}
            </h2>
            <p className="cinema-italic">
              {el.frontmatter.subtitle}
            </p>
            <p className="cinema-text">
              <div
                dangerouslySetInnerHTML={{ __html: el.html }}
              />
            </p>
          </section>
        )}
      </div>
    </Layout>
  )
}

export default CinemaTV
export const pageQuery = graphql`
  query CinemaTVQuery {
    allMarkdownRemark(
      filter: {frontmatter: {template: {eq: "CinemaTV"}}}
      ) {
      edges {
        node {
          html
          id
          frontmatter {
            subtitle
            title
            img
          }
        }
      }
    }
  }
`
