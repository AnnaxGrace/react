import axios from "axios";
const APIkey = "105733080cec4d1b86ce0c0fac002451"


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
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
};
