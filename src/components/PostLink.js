import React from "react"
import { Link } from "gatsby"
import './PostLink.scss'

const PostLink = ({ post }) => (
  <div className="post-item">
    <Link to={post.fields.slug} className="post-link">
      <img src={post.frontmatter.img} alt="" />
      <p className="post-item-title">{post.frontmatter.title}</p>
      {post.frontmatter.categoria_produto && post.frontmatter.categoria_produto.map(post => (
        <p className="post-item-category">{post.categoria_list}</p>
      ))}
      <p className="post-item-about">{post.excerpt}</p>
      <p className="post-item-preco">R$ {post.frontmatter.preco}</p>
    </Link>
  </div>
)
export default PostLink
