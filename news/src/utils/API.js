import axios from "axios";
const APIkey = "105733080cec4d1b86ce0c0fac002451"

export default {
  getHeadlines: function() {
    return axios.get("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" + APIkey);
  },
  getWeather: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
  getPolitics: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
  getSports: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
  getAnimals: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
};
