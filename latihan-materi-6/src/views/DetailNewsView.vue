<template>
    <div>
        <div class="container-detail">
            <img :src="DetailNews.urlToImage" alt="">
            <h2>{{ DetailNews.title }}</h2>
            <div class="detail-author">
                <span>{{ DetailNews.author }}</span>
                <span>{{ DetailNews.publishedAt }}</span>
            </div>
            <div class="detail-content">
                <p>{{ DetailNews.content }}</p>
                <span>Lanjutkan baca ke: <a :href="DetailNews.url">Sini</a></span>
            </div>
            <button @click="goBack">Kembali</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailNewsView",
    computed: {
        DetailNews() {
            return this.$store.state.news.news
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style>
img {
    width: 100%;
}

.detail-author {
    display: flex;
    justify-content: space-between;
}
</style>