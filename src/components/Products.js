import React, { useEffect, useState } from 'react'
import PostLink from "./PostLink"
import './Products.scss'
import AOS from 'aos';
import "aos/dist/aos.css";

const Products = ({ post }) => {
  const Posts = post
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  const postsPerPage = 10;

  const [data, setData] = useState([...Posts]);
  const [currentData, setCurrentData] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = () => {
    const toShow = Posts.slice(
      currentData.length,
      currentData.length + postsPerPage
    );
    setCurrentData([...currentData, ...toShow]);
  };

  useEffect(() => {
    setData(data);
  }, [data]);

  useEffect(() => {
    setCurrentData(data.slice(0, postsPerPage));
  }, [data]);

  const handleShowMorePosts = () => {
    let loadedMore = next + postsPerPage;
    loopWithSlice(next, loadedMore);
    setNext(next + postsPerPage);
  };

  return (
    <div className="products-wrapper container" id="produtos">
      <h1 className="title">Pode ter certeza que tem um produto Bendito Cheiro que é a sua cara.</h1>
      <div className="sobre-row">
        <div className="sobre-col">
        </div>
        <div className="sobre-col">
          <p className="text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div className="posts-list">
        {currentData}
      </div>
      {currentData.length < Posts.length && (
        <div className="btn-wrapper">
          <button onClick={handleShowMorePosts}>Ver mais produtos...</button>
        </div>
      )}
    </div>
  )
}

export default Products
