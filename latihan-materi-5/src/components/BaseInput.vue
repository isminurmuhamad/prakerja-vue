<template>
  <div>
    <input
      type="text"
      :value="value"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
    name:"InputVue",
    props:['value'],
    methods:{
        updateValue(value){
            this.$emit('input', value)
        }
    }
}
</script>

<style>
/* .input {
  width: 80%;
} */
input {
  width: 100%;
}
</style>