<template>
  <div class="about">
    <h2>Berita Terkini</h2>
    <div class="container">
      <div class="article" v-for="(news, index) in listNews" :key="index">
        <card-news :news='news'></card-news>
      </div>
    </div>
  </div>
</template>
<script>
import cardNews from '@/components/cardNews.vue'

export default {
  name: "HomeView",
  components: {
    cardNews
  },
  computed: {
    listNews() {
      return this.$store.state.news.news
    }
  },
  methods: {
    fetchNews() {
      this.$store.dispatch("news/fetchNews")
    }
  },
  mounted() {
    this.fetchNews()
  }
}
</script>

<style>
h2 {
  text-align: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.article {
  width: 50%;
}
</style>
