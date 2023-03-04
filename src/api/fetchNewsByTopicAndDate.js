import axios from "axios";
import { BASE_URL,API_KEY } from "../config";


export default async function  fetchNewsByTopicAndDate(date,topic){
    try {
        const response=await axios.get(`${BASE_URL}everything?q=${topic}&from=${date}&to=${date}&sortBy=popularity&apiKey=${API_KEY}`)
        return response.data.articles;

    } catch (error) {
        console.error(error)
        
    }
}