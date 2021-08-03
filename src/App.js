import { useEffect, useState } from "react";
import News from './components/news/News'
import './app.css'

const URL = "https://newsapi.org/v2/everything?q=keyword&apiKey=24dd99071c854c0395f1b462e940cad8"
function App() {
  const [news, setNews ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const deleteItem = (id)=>{
    const deleteNews = news.filter((item) => item.index !== index)
    setNews(deleteNews)
  }

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
  return <p>Loading</p>
}

  return (
    <>
    <News news={news} deleteItem={deleteItem} />

    </>
  );
}

export default App;

// const fetchTours = async () => {
//   setLoading(true)
//   try {
//     const response = await fetch(url)
//     const tours = await response.json()
//     setLoading(false)
//     setTours(tours)
//   } catch (error) {
//     setLoading(false)
//     console.log(error)
//   }
// }
// useEffect(() => {
//   fetchTours()
// }, [])