import React from 'react'
import './PostSection.scss'
import { Link } from 'gatsby'

const PostSection = ({
  posts = [],
}) => {
  return (
    <>
      {posts.map(post => (
        <div className="post-item-section" key={post.id}>
          <Link to={post.fields.slug} className="post-link">
            {post.frontmatter.title}
            <p className="excerpt">
              {post.excerpt}
            </p>
            <div>
              {post.frontmatter.img && <div className="img-home"
                style={{
                  backgroundImage: `url(${post.frontmatter.img})`
                }} />}
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default PostSection
