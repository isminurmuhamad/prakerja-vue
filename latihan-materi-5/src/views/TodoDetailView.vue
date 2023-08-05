<template>
    <div class="detailTodo">
        <button @click="buttonKembali">Kembali</button>
        <h2>{{ detail.list }}</h2>
        <div class="editDes" v-if="detail.editMode">
            <base-input class="inputDes" v-model="detail.description"></base-input>
            <button class="btn" @click="buttonEdit">Simpan</button>
        </div>
        <div v-else>
            <p v-if="detail.description != ''">{{ detail.description }}</p>
            <p v-else>Belum ada deskripsi nih</p>
            <button @click="buttonEdit">Ubah Deskripsi</button>
        </div>
    </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'

export default {
    name: "TodoDetailView",
    components: {
        BaseInput
    },
    computed: {
        detail() {
            return this.$store.state.todo.lists[this.$route.params.id]
        },
    },
    methods: {
        buttonKembali() {
            this.$router.go(-1)
        },
        buttonEdit() {
            // console.log(this.detail.editMode);
            this.$store.commit("todo/editLists", this.detail.editMode = !this.detail.editMode)

        }
    }
}
</script>

<style>
.editDes {
    display: flex;
}

.inputDes {
    width: 90%;
}

.btn {
    width: 10%;
}
</style>