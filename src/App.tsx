import React, { useState, useEffect } from 'react';

import './App.scss';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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
  const [article, setArticle] = useState<Article[]>()


  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v3/blogs`)
      .then(response => response.json())
      .then(json => setArticle(json))

  }, [article])





  const Console = () => {
    console.log(article, 'hello1')
  }



  return (
    <div className="App">
      <Button
        onClick={Console}
        variant="contained"
      >
        Console
      </Button>
      <div>
        {article?.map(art => (
          <div>
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
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
