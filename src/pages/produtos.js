import React, { useState, useEffect } from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import './Produtos.scss'
import PostSection from "../components/PostSection"
import TypeChecker from 'typeco';
import loadable from '@loadable/component'
import Select from 'react-select';
import AOS from 'aos';
import "aos/dist/aos.css";

const SearchField = loadable(() => import('react-search-field'))
const Paginator = loadable(() => import('react-hooks-paginator'))

const Trabalhos = ({
  data: {
    allMarkdownRemark: { edges }
  },
}) => {
  const posts = edges.map(edge => ({ ...edge.node }))

  const pageLimit = 10;

  const [data, setData] = useState([...posts]);
  const [currentData, setCurrentData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState(9999);

  useEffect(() => {
    setData(data);
  }, [data]);

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);

  const getMatchedList = (searchText) => {
    if (TypeChecker.isEmpty(searchText)) return posts;
    return posts.filter(post => post.frontmatter.title.toLowerCase().includes(searchText.toLowerCase()));
  };

  const onSearchClickExample = (value) => {
    setData(getMatchedList(value))
  }

  const handleSelectChange = e => {
    const filteredPosts = posts.filter(a => a.frontmatter.categoria_produto.map(el => el.categoria_list).toString() === e.value);
    setData(filteredPosts);
  };

  const addValue = posts.map(el => {
    return {
      ...el,
      value: el.frontmatter.categoria_produto.map(el => el.categoria_list).toString(),
      label: el.frontmatter.categoria_produto.map(el => el.categoria_list).toString()
    };
  });

  const cleanDuplicateValue = addValue.reduce((unique, o) => {
    if (!unique.some(obj => obj.label === o.label && obj.value === o.value)) {
      unique.push(o);
    }
    return unique;
  }, []);

  const handleInput = e =>{
    e.preventDefault();
    const filteredPosts = posts.filter(a => parseInt(a.frontmatter.preco.replace(/,/g, ''), 10) < parseInt(price, 10));
    setData(filteredPosts);
    setPrice(e.target.value);
  }

  const customStyles = {
    option: (provided) => ({
      ...provided,
      padding: 20,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <Layout>
      <div className="produtos-home container">
        <div className="produtos-wrapper">
          <h1 className="title">
            Confira os nossos produtos
          </h1>
          <p className="produtos-text">
            The standard Lorem Ipsum passage, used since the 1500s
          </p>
          <div className="produtos-wrapper-row">
            <div className="produtos-row">
              <div className="produtos-col produtos-col-padding">
                <SearchField
                  placeholder="Busque por produtos"
                  classNames="search"
                  onChange={onSearchClickExample}
                />
              </div>
              <div className="produtos-col produtos-col-padding">
                <div className="produtos-row">
                  <div className="produtos-col">
                    <Select
                      id="categoria"
                      name="categoria"
                      styles={customStyles}
                      onChange={handleSelectChange}
                      options={cleanDuplicateValue}
                      classNamePrefix="select-categoria"
                      placeholder="Categorias"
                    />
                  </div>
                  <div className="produtos-col produtos-col-range">
                    <div className="produtos-row">
                      <input id="myRange" type="range" onInput={handleInput} min="1" max="9999" />
                      <p className="price">Preço até: R$ {price.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!!currentData.length ? <PostSection posts={currentData} /> : <p className="search-result-none">Nenhuma produto encontrado.</p>}
        <Paginator
          totalRecords={data.length}
          pageLimit={pageLimit}
          pageNeighbours={2}
          setOffset={setOffset}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </Layout>
  )
}

export default Trabalhos
export const pageQuery = graphql`
  query TrabalhosQuery {
    allMarkdownRemark(
      filter: {frontmatter: {template: {eq: "ProdutoPost"}}}
      sort: { order: DESC, fields: [frontmatter___date] }
      ) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt(pruneLength: 50)
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            img
            title
            preco
            img_produto {
              img_list
            }
            categoria_produto {
              categoria_list
            }
          }
        }
      }
    }
  }
`
