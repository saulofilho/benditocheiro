import React, { useEffect } from 'react'
import './PostSection.scss'
import { Link } from 'gatsby'
import AOS from 'aos';
import "aos/dist/aos.css";

const PostSection = ({
  posts = [],
}) => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <>
      <div className="post-item-section" data-aos="fade-up">
        {posts.map(post => (
          <div className="post-item" key={post.id}>
            <Link to={post.fields.slug} className="post-link">
              <img src={post.frontmatter.img} alt="" />
              <p className="post-item-title">{post.frontmatter.title}</p>
              {post.frontmatter.categoria_produto && post.frontmatter.categoria_produto.map(post => (
                <p className="post-item-category" key={post.categoria_list}>
                  {post.categoria_list}
                </p>
              ))}
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
