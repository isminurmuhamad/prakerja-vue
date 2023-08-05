<template>
    <div class="item">
        <div class="container-card" @click="detailNews">
            <div class="image">
                <img :src="news.urlToImage" alt="">
            </div>
            <div class="content">
                <span class="author">{{ news.author }}</span>
                <h4>{{ news.title }}</h4>
                <span class="published">{{ news.publishedAt }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardNews",
    props: {
        news: Object
    },
    methods: {
        detailNews() {
            // this.$store.dispatch("news/fetchDetail", this.news.title)
            this.$store.commit('news/fetchDetail', this.news.title)
        }
    }
}
</script>

<style>
.article {
    width: 50%;
}

.item {
    padding: 12px;
    border-radius: 4px;
}

.container-card {
    display: flex;
    background-color: #e3eee8;
    min-height: 150px;
    cursor: pointer;
}

.image {
    width: 30%;
    margin-block: auto;
}

img {
    max-width: 100%;
    max-height: 100%;
}

.content {
    width: 70%;
    padding: 4px 12px;
}

.published {
    font-size: small;
}
</style>