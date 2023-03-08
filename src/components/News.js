import React, { useState } from 'react'

import { useEffect } from 'react';

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=> {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  
    // document.title = `Taaza Khabar-${props.category}`;
  
 const updateNews=async()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bc4fdccfcbbe49d8aa63a093108b5ae1&page=${page}&pageSize=${props.pageSize}`;
   setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseddata = await data.json();
    props.setProgress(70);
    setArticles(parseddata.articles);
    setTotalResults(parseddata.totalResults);
    setLoading(false);
    props.setProgress(100);

  }
  useEffect(()=>{
    updateNews();
  },[]);


  const fetchMoreData  = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bc4fdccfcbbe49d8aa63a093108b5ae1&page=${page+1}&pageSize=${props.pageSize}`;
     setPage(page+1);
     
    let data = await fetch(url);
    let parseddata = await data.json();
    setArticles(articles.concat(parseddata.articles));
    setTotalResults(parseddata.totalResults)
    
    
  };
  
    return (
      <>
      <div className="container" style={{width:'70%', fontFamily:"Koulen", marginTop:'70px', padding:'5px' , borderRadius:'50px' , color:'white' , backgroundColor:'black' , border:'5px solid white'}}>
        <h1 className='text-center'>Taaza Khabar - Top Headlines from {props.category}</h1>

      </div>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner></Spinner>}
        >
        <div className="container">

          <div className="row ">
            { articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 50) : ""} discription={element.description ? element.description.slice(0, 100) : ""} Imageurl={element.urlToImage} newsurl={element.url} source={element.source.name} date={element.publishedAt} author={element.author}></NewsItem>
                   
              </div>
            })}

          </div>
        </div>
        </InfiniteScroll>

      </>
    )
  }

 News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category:'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category:PropTypes.string
}
export default News;