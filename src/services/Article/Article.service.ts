import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_DEV_BASE_URL;

async function getArticles() {
  try {
    const res = await axios.get("/blog/all");

    return res.data.results;
  } catch (error) {
    console.error(error);
  }
}

export { getArticles };
