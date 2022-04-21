import React from "react"
import { Link } from "gatsby"
import './PostLink.scss'

const PostLink = ({ post }) => (
  <div className="post-item">
    <Link to={post.fields.slug} className="post-link">
      <img src={post.frontmatter.img} alt="" />
    </Link>
    <p className="post-item-title">{post.frontmatter.title}</p>
    <p className="post-item-category">{post.frontmatter.categoria}</p>
    <p className="post-item-about">{post.excerpt}</p>
    <p className="post-item-preco">R$ {post.frontmatter.preco}</p>
  </div>
)
export default PostLink
