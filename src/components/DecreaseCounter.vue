<template>
  <div  id="decreasecounter">
     <h2>Welcome to Counter</h2>
    {{counter}}
    <button @click="decreaseCounter">decrease counter</button>
  </div>
</template>
<script lang="ts">

import { Component, Vue} from 'vue-property-decorator';
name:"decreasecounter"
@Component({
   methods: {
      decreaseCounter () {
        this.$store.dispatch('decreaseAction', 1)
      }
    },
    computed: {
      counter () {
        return this.$store.getters.counter
      }
    }
})
export default class DecreaseCounter extends Vue{
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3{
  background-color: cornsilk;
}
</style>
