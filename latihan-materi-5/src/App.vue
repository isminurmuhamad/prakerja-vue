<!-- <template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->

<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import BaseInput from './components/BaseInput.vue';
// import BaseButton from './components/BaseButton.vue';

export default {
  name: 'App',
  // components: {
  //   // HelloWorld,
  //   BaseInput,
  //   BaseButton
  // },
  // computed:{
  //   todoList(){
  //     return this.$store.state.todo.lists
  //   }
  // },
  // data(){
  //   return{
  //     // lists:[],
  //     todo:'',
  //   }
  // },
  // methods:{
  //   tambahList(){
  //     if(this.todo.trim() != ''){
  //       this.$store.commit("todo/addLists", { list: this.todo.trim(), editMode: false })
  //       // this.lists.push({list:this.todo.trim(),editMode:false})
  //       this.todo=''
  //     }
  //   },
  //   hapusList(val){
  //     this.lists = this.lists.filter(list => list !== val);
  //   },
  //   editList(data){
  //     data.editMode = !data.editMode
  //   }
  // },
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
</style>
