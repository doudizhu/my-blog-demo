<template lang='pug'>
  #id
    AddBlog
</template>

<script lang="ts">
import AddBlog from "./components/AddBlog.vue";

import {Component,Vue,} from 'vue-property-decorator'
@Component({
  components:{AddBlog}
})
export default class ViewComponent extends Vue {

}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
