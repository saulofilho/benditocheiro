import React from "react"
import PostLink from "./PostLink"
import './Products.scss'

const Products = ({ post }) => {
  const Posts = post
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <div className="products-wrapper container">
      <h1>Produtos bendito cheiro</h1>
      <div className="sobre-row">
        <div className="sobre-col">
        </div>
        <div className="sobre-col">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div className="posts-list">
        {Posts}
      </div>
    </div>
  )
}

export default Products
