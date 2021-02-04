import axios from "axios";
const APIkey = process.env.REACT_APP_API_KEY


export default {
  getHeadlines: function() {
    return axios.get("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" + APIkey);
  },
  getSports: function() {
    return axios.get("http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=" + APIkey);
  },
  getPolitics: function() {
    return axios.get("http://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=" + APIkey);
  },
  getWeather: function() {
    return axios.get("https://newsapi.org/v2/everything?q=weather&apiKey=" + APIkey);
  },
};
