import React, { useState, useEffect } from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import './Produtos.scss'
import PostSection from "../components/PostSection"
import TypeChecker from 'typeco';
import loadable from '@loadable/component'
import Select from 'react-select';

const SearchField = loadable(() => import('react-search-field'))
const Paginator = loadable(() => import('react-hooks-paginator'))

const Trabalhos = ({
  data: {
    allMarkdownRemark: { edges }
  },
}) => {
  const posts = edges.map(edge => ({ ...edge.node }))

  const pageLimit = 10;

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([...posts]);
  const [currentData, setCurrentData] = useState([]);

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

  const handleSelectChange = item => {
    setCurrentData(prevState => ({
      ...prevState,
      phase: item.value,
    }));
  };

  console.log('x------------------------------', handleSelectChange)

  // https://github.com/saulofilho/green-app/blob/8667c03dedddd5e6a8191fa8d03537b8e60cc76e/src/components/GraphsData/index.js

  const flowering_type = [
    { value: 'Regular', label: 'Regular' },
    { value: 'Feminised', label: 'Feminised' },
    { value: 'Autoflowering', label: 'Autoflowering' },
    { value: 'Autoflowering Regular', label: 'Autoflowering Regular' },
    { value: 'Fast', label: 'Fast' },
  ];

  return (
    <Layout>
      <div className="produtos-home container">
        <div className="produtos-wrapper">
          <h1>
            Lorem Ipsum
          </h1>
          <p>
            The standard Lorem Ipsum passage, used since the 1500s
          </p>
          <div className="produtos-row">
            <div className="produtos-col">
              <SearchField
                placeholder="Busque por uma palavras-chave"
                classNames="search"
                onChange={onSearchClickExample}
              />
            </div>
            <div className="produtos-col">
              <Select
                id="categoria"
                name="categoria"
                onChange={handleSelectChange}
                options={flowering_type}
              />
            </div>
          </div>
        </div>
        {!!currentData.length ? <PostSection posts={currentData} /> : <p className="search-result-none">Nenhuma palavra-chave encontrada.</p>}
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
            categoria
            preco
            img_produto {
              img_list
            }
          }
        }
      }
    }
  }
`
