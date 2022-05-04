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

  const storiesPerPage = 3;

  const [data, setData] = useState([...Posts]);
  const [currentData, setCurrentData] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = () => {
    const toShow = Posts.slice(
      currentData.length,
      currentData.length + storiesPerPage
    );
    setCurrentData([...currentData, ...toShow]);
  };

  useEffect(() => {
    setData(data);
  }, [data]);

  useEffect(() => {
    setCurrentData(data.slice(0, storiesPerPage));
  }, [data]);

  const handleShowMorePosts = () => {
    let loadedMore = next + storiesPerPage;
    loopWithSlice(next, loadedMore);
    setNext(next + storiesPerPage);
  };

  return (
    <div className="products-wrapper container" id="produtos">
      <h1 data-aos="fade-up">Produtos bendito cheiro</h1>
      <div className="sobre-row">
        <div className="sobre-col">
        </div>
        <div className="sobre-col">
          <p data-aos="fade-down">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div className="posts-list" data-aos="fade-up">
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
