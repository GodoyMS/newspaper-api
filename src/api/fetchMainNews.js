import axios from "axios";
import { BASE_URL,API_KEY } from "../config";
import formattedDate from "../utils/formattedDate";


export default async function  fetchMainNews(){
    try {
        const response=await axios.get(`${BASE_URL}everything?q=apple&from=${formattedDate(new Date(new Date().getTime() - (24 * 60 * 60 * 1000)))}&to=${formattedDate(new Date(new Date().getTime() - (24 * 60 * 60 * 1000)))}&sortBy=popularity&apiKey=${API_KEY}`)
        return response.data.articles;

    } catch (error) {
        console.error(error)
        
    }
}