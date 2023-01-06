import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
  url: BASE_URL,
  params: { maxResults: 100, },
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Key": "b44996121emsh4c195265a525681p134be2jsne9e00e0b4acc",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
    const {data} =await axios.get(`${BASE_URL}/${url}`, options)

    return data;
}