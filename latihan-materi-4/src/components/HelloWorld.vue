<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="todolist">
      <ol>
        <li v-for="(list, index) in lists" :key="index">
          {{ list }}
        </li>
      </ol>
    </div>
    <div class="form">
      <input type="text" @keyup.enter="btnEmit" placeholder="Masukan List" />
      <div class="btn">
        <button @click="btnEmit">Tambahkan</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    lists:Array
  },
  data(){
    return{
      todo:''
    }
  },
  methods:{
    // saveTodo(){
    //   if(this.todo.trim() != ''){
    //     this.lists.push(this.todo.trim())
    //     this.todo=''
    //   }
    // }
    btnEmit(event){
      this.$emit("btn-action",event.target.value)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  display: flex;
}
input {
  width: 80%;
}
.btn {
  width: 20%;
  text-align: center;
}
</style>
