import { useEffect, useState } from "react";
import News from './components/news/News'


const URL = "https://newsapi.org/v2/everything?q=keyword&apiKey=24dd99071c854c0395f1b462e940cad8"
function App() {
  const [news, setNews ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const deleteItem = (author)=>{
  //   const deleteNews = news.filter((item) => item.author !== author)
  //   setNews(deleteNews)
  // }

  const fetchData = async ()=>{
      setIsLoading(true)
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setIsLoading(false)
      setNews(data.articles)
      // console.log(data.articles);
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }
useEffect(()=>{
  fetchData()
},[]);

if(isLoading){
  return <h1>Loading...</h1>
}

  return (
    <>
    <News news={news} />

    </>
  );
}

export default App;

