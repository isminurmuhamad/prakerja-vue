<template>
  <div class="btn">
    <button @click="btnEmit">{{ btn }}</button>
  </div>
</template>

<script>
export default {
    name:"BaseButton",
    props:{
        btn:String
    },
    methods:{
        btnEmit(){
      this.$emit("btn-action")
    }
  },
}
</script>

<style>
.btn {
  width: 20%;
  text-align: center;
}
</style>