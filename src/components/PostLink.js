import React from "react"
import { Link } from "gatsby"
import './PostLink.scss'

const PostLink = ({ post }) => (
  <div className="post-item">
    <Link to={post.fields.slug} className="post-link">
      {post.frontmatter.featured === 'img' ?
        <img src={post.frontmatter.img} alt="" />
        : <div
          className="vimeo-home"
          dangerouslySetInnerHTML={{ __html: post.frontmatter.vimeo }}
        />
      }
    </Link>
  </div>
)
export default PostLink
