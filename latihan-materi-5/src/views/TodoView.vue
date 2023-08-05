<template>
  <div class="home">
    <h1>Todo List</h1>
    <div>
      <ol>
        <li v-for="(list, index) in todoList" :key="index">
          <div class="todolist">
            <div class="list" v-if="list.editMode">
              <base-input v-model="list.list"></base-input>
            </div>
            <div class="list" v-else @click="detailList(index)">
              {{ list.list }}
            </div>
            <div class="action">
              <base-button btn="Hapus" @btn-action="hapusList(list)"></base-button>
            </div>
            <div class="action">
              <base-button btn="Edit" @btn-action="editList(list)"></base-button>
            </div>
          </div>
        </li>
      </ol>
    </div>
    <div class="form">
      <div class="input">
        <base-input v-model="todo"></base-input>
      </div>
      <div class="btn">
        <base-button btn="Tambahkan" @btn-action="tambahList"></base-button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import BaseInput from '../components/BaseInput.vue';
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    BaseInput,
    BaseButton
  },
  computed: {
    todoList() {
      return this.$store.state.todo.lists
    }
  },
  data() {
    return {
      // lists:[],
      todo: '',
    }
  },
  methods: {
    tambahList() {
      if (this.todo.trim() != '') {
        this.$store.commit("todo/addLists", { list: this.todo.trim(), description: "", editMode: false })
        // this.lists.push({list:this.todo.trim(),editMode:false})
        this.todo = ''
      }
    },
    hapusList(val) {
      this.$store.commit("todo/hapusLists", val)
      // this.lists = this.lists.filter(list => list !== val);
    },
    editList(data) {
      this.$store.commit("todo/editLists", data.editMode = !data.editMode)
      // data.editMode = !data.editMode
    },
    detailList(id) {
      this.$router.push({ name: "TodoDetail", params: { id: id } })
    }
  },
}
</script>

<style scoped>
.form,
.todolist {
  display: flex;
  padding: 4px 8px;
  margin: 12px 0;
}

.list,
.input {
  width: 80%;
}

.btn {
  width: 20%;
  text-align: center;
}

.action {
  width: 10%;
  text-align: center;
}
</style>