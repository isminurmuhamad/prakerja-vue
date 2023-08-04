<template>
  <div id="app">
    <h1>Todo List</h1>
    <div>
      <ol>
        <li v-for="(list, index) in lists" :key="index">
          <div class="todolist">
            <div class="list" v-if="list.editMode">
              <base-input v-model="list.list"></base-input>
            </div>
            <div class="list" v-else>
              {{ list.list }}
            </div>
            <div class="action">
              <base-button
                btn="Hapus"
                @btn-action="hapusList(list)"
              ></base-button>
            </div>
            <div class="action">
              <base-button
                btn="Edit"
                @btn-action="editList(list)"
              ></base-button>
            </div>
          </div>
        </li>
      </ol>
    </div>
    <div class="form">
      <base-input v-model="todo"></base-input>
      <base-button btn="Tambahkan" @btn-action="tambahList"></base-button>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BaseInput from './components/BaseInput.vue';
import BaseButton from './components/BaseButton.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    BaseInput,
    BaseButton
  },
  data(){
    return{
      lists:[],
      todo:'',
    }
  },
  methods:{
    tambahList(){
      if(this.todo.trim() != ''){
        this.lists.push({list:this.todo.trim(),editMode:false})
        this.todo=''
      }
    },
    hapusList(val){
      this.lists = this.lists.filter(list => list !== val);
    },
    editList(data){
      data.editMode = !data.editMode
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.form,
.todolist {
  display: flex;
  padding: 4px 8px;
  margin: 12px 0;
}
.list {
  width: 80%;
}
.action {
  width: 10%;
  margin: auto;
}
</style>
