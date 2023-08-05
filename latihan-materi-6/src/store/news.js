import router from "@/router";
import Axios from "axios";

const state = () => ({
  news: [],
});
const mutations = {
  setNews(state, param) {
    state.news = param;
  },
  fetchDetail(state, param) {
    state.news = state.news.find((news) => news.title == param);
    router.push({
      name: "DetailNews",
      params: { title: param.replaceAll(" ", "-") },
    });
  },
};
const actions = {
  fetchNews(store) {
    Axios.get(`https://newsapi.org/v2/everything`, {
      params: {
        q: "apple",
        from: "2023-08-04",
        to: "2023-08-04",
        sortBy: "popularity",
        apiKey: "c5c4b220d92d4778a3896c02189dd68c",
      },
    }).then((response) => {
      store.commit("setNews", response.data.articles);
    });
  },
};
// const getters = {};

export default {
  state,
  mutations,
  actions,
};
