import React, { useState, useEffect,useMemo } from 'react';
import fetchMainNews from './api/fetchMainNews';
import fetchNewsByTopicAndDate from './api/fetchNewsByTopicAndDate';
import Header from './components/organisms/Header/Header';
import SearchBar from './components/molecules/SearchBar/SearchBar';
import { Container, Typography } from '@mui/material';
import formattedDate from './utils/formattedDate';
import NewsCardList from './components/organisms/NewsCardList/NewsCardList';
function App() {
  const [currentNews, setCurrentNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dateInput,setDateInput]=useState(formattedDate(new Date(new Date().getTime() - (24 * 60 * 60 * 1000)))); //Get yesterday date
  const[searchInput,setSearchInput]=useState('')
  const[searchWord,setSearchWord]=useState('') //Current search word

  const fetchMain=useMemo(()=>{
    return async()=>{
      const mainNews = await fetchMainNews();
      if(mainNews.length>0){
        setCurrentNews(mainNews.slice(0,12));
        setLoading(false)
      }  
    }
  })
  
  async function fetchBySearchDate(){
    if(searchInput!==""){
      const Response=await fetchNewsByTopicAndDate(dateInput,searchInput)
        if(Response.length>12){
          setCurrentNews(Response.slice(0,12))
        setSearchInput('')
        setSearchWord(searchInput)
        }else{
        setCurrentNews(Response)
        setSearchInput('')
        setSearchWord(searchInput)
        }
    }
  }
  useEffect(() => {
    fetchMain()
  },[]);
  return (
    <div>
      <Header/>
      <Container component="main"  maxWidth="lg">
        <SearchBar dateInput={dateInput} setDateInput={setDateInput} searchInput={searchInput} setSearchInput={setSearchInput} search={fetchBySearchDate}/>
        {searchWord!== "" ? (<Typography textAlign={'center'} sx={{my:2}}>Results for: "{searchWord}"  in {dateInput}</Typography>):""}
        { currentNews.length> 0 && ( <NewsCardList allCurrentNews={currentNews}/>)}
        { loading && <Typography textAlign={'center'} sx={{my:2}}>Loading...</Typography>}
      </Container>
      
    </div>
  );
}

export default App;