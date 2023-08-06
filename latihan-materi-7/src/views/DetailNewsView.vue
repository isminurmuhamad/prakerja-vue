<template>
    <v-main>
        <v-container>
            <img :src="DetailNews.urlToImage" alt="">
            <div class="d-flex pa-2 justify-lg-space-between">
                <span>{{ DetailNews.author }}</span>
                <h3>{{ DetailNews.title }}</h3>
                <span>{{ DetailNews.publishedAt }}</span>
            </div>
            <div class="detail-content">
                <p>{{ DetailNews.content }}</p>
                <span>Lanjutkan baca ke: <a :href="DetailNews.url">Sini</a></span>
            </div>
            <v-btn elevation="2" outlined @click="goBack">Kembali</v-btn>
        </v-container>
    </v-main>
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