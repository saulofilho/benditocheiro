import React from "react"
import { Link } from "gatsby"
import './PostLink.scss'

const PostLink = ({ post }) => (
  <div className="post-item">
    <Link to={post.fields.slug} className="post-link">
      <img src={post.frontmatter.img} alt="" />
    </Link>
    <p>{post.frontmatter.title}</p>
    <p>{post.frontmatter.categoria}</p>
    <p>{post.excerpt}</p>
    <p>R$ {post.frontmatter.preco}</p>
  </div>
)
export default PostLink
