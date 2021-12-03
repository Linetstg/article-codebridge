import React, { useState, useEffect } from 'react';

import './App.scss';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { maxWidth } from '@mui/system';


interface Article {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  description: string;
  imgUrl: string;
}

const App: React.FC<{}> = () => {
  const [article, setArticle] = useState<Article[]>([])
  const [blogs, setBlogs] = useState('')
  const [visibleData, setVisibleData] = useState<Article[]>([])
  const [selectedObj, setSelectedObj] = useState<any>(null)

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v3/blogs`)
      .then(response => response.json())
      .then(json => { setArticle(json); setVisibleData(json) })

  }, [])

  const inputBlog = blogs.split(' ')

  // console.log(visibleData)

  const handleChange = (event: any) => {
    setBlogs(event.target.value);
    
    let arrTest:any = [];
    
     inputBlog.map(el => {
       
      arrTest.push( article.filter(art => (
        art.title.toLowerCase().includes(el.toLowerCase()) ||
        art.summary.toLowerCase().includes(el.toLowerCase())
      )))
    })

    console.log(arrTest)
  };


  return (
    <div className="App">
      <input
        type="text"
        id="search-query"
        className="input"
        placeholder="Type search word"
        onChange={handleChange}
        value={blogs}
      />
      <div className="cards">
        {selectedObj
          ? (
            <div>
              <Card sx={{ maxWidth: 1050}}>
                <CardMedia
                  component="img"
                  height="140"
                  image={selectedObj.imageUrl}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {selectedObj.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedObj.summary}
                  </Typography>
                </CardContent>
              </Card>
              <ArrowRightAltIcon></ArrowRightAltIcon>
              <Button
                size="small"
                onClick={() => { setSelectedObj(null) }}
              >
                Learn More
              </Button>
            </div>
          )
          : (
            visibleData?.map(art => (
              <div key={art.id} className="cards__element">
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={art.imageUrl}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {art.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {art.summary}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => { setSelectedObj(art); console.log({ selectedObj }) }}
                    >
                      Learn More
                    </Button>
                    <ArrowRightAltIcon></ArrowRightAltIcon>
                  </CardActions>
                </Card>
              </div>
            ))
          )}
      </div>
    </div>
  );
}

export default App;
function result(result: any) {
  throw new Error('Function not implemented.');
}

