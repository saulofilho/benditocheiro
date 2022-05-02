import React from 'react'
import './PostSection.scss'
import { Link } from 'gatsby'

const PostSection = ({
  posts = [],
}) => {
  return (
    <>
      <div className="post-item-section" >
        {posts.map(post => (
          <div className="post-item" key={post.id}>
            <Link to={post.fields.slug} className="post-link">
              <img src={post.frontmatter.img} alt="" />
              <p className="post-item-title">{post.frontmatter.title}</p>
              <p className="post-item-category">{post.frontmatter.categoria}</p>
              <p className="post-item-about">{post.excerpt}</p>
              <p className="post-item-preco">R$ {post.frontmatter.preco}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default PostSection
