<template>
  <div  id="Counters">
     <h2>Welcome to Counter</h2>
    {{counter}}

    <button @click="incrementCounter">increment counter</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

name:"Counters"

@Component({
   methods: {
      incrementCounter () {
        this.$store.dispatch('incrementAction', 1)
      }
    },
    computed: {
      counter () {
        return this.$store.getters.counter
      }
    }
})
export default class Counter extends Vue {
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3{
  background-color: cornsilk;
}
</style>
