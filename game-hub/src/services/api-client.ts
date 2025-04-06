import axios from "axios";

export default axios.create({
  baseURL:'https://api.rawg.io/api',
  params: {
    key: '44b2ab0b92544d648503e99d70c11aae'
  }
})