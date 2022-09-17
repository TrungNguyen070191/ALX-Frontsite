import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_DEV_BASE_URL;

async function getArticles() {
  try {
    const res = await axios.get("/api/blog");

    return res.data;
  } catch (error) {
    console.error(error);
  }
}

async function getArticle(id: string) {
  try {
    const res = await axios.get("/api/blog/detail", {
      params: {
        id,
      },
    });

    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export { getArticles, getArticle };
