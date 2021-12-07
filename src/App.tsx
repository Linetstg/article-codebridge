import React, { useState, useEffect } from 'react';
import './App.scss';

import { Article } from './types/types';
import { getArticles } from './api/api';
import { DetailsPage } from './components/DetailsPage/DetailsPage';
import { HomePage } from './components/HomePage/HomePage';

import GlobalStyles from '@mui/material/GlobalStyles';

const App: React.FC<{}> = () => {
  const [article, setArticle] = useState<Article[]>([])
  const [blogs, setBlogs] = useState('')
  const [visibleData, setVisibleData] = useState<Article[]>([])
  const [selectedObj, setSelectedObj] = useState<any>(null)
  const inputBlog = blogs.split(' ');


  useEffect(() => {
    (async () => {
      const data = (await getArticles(inputBlog)).data;
      setArticle(data);
      console.log(data, inputBlog)
    })();
  }, [blogs])

  const handleChange = (event: any) => {
    setBlogs(event.target.value);

  };

  return (

    <div>
      <GlobalStyles
        styles={{
          body: { fontFamily: 'Montserrat' }
        }}
      />
      <div >
        {selectedObj
          ? (
            <>
              <DetailsPage details={selectedObj} setSelectedObj={setSelectedObj} />
            </>

          )
          : (
            <div className="home__page">
              
                <div className="search-bar">
                  <label htmlFor="search-bar__area">
                    <p className="search-bar__title">
                      Filter by keywords
                    </p>

                    <input
                      type="text"
                      className="search-bar__area"
                      id="search-bar__area"
                      placeholder="Enter some words"
                      value={blogs}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              <p className="section__title">Results: {article.length}</p>
              <HomePage articles={article} inputBlog={inputBlog} setSelectedObj={setSelectedObj}/>
            </div>
          )}
      </div>
    </div>
  );
}

export default App;
function result(result: any) {
  throw new Error('Function not implemented.');
}

