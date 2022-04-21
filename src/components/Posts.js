import React from "react"
import PostLink from "./PostLink"
// import './Post.scss'

const Posts = ({ post }) => {
  const Posts = post
  .filter(edge => !!edge.node.frontmatter.date)
  .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <div className="trabalhos-home-index container">
      <h1>
        Lorem Ipsum
      </h1>
      <div className="posts-list">
        {Posts}
      </div>
    </div>
  )
}

export default Posts
