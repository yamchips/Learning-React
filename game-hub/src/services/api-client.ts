import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9d406e40ee0c4246be8a080ee33c5e62",
  },
});
