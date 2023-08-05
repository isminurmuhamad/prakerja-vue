<template>
  <div>
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
</style>