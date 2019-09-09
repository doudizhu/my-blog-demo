<template lang='pug'>
  nav
    ul
      li
        router-link(to='/' exact) 博客
        router-link(to='/add' exact) 写博客
</template>

<script lang="ts">import {Component,Vue,} from 'vue-property-decorator'
@Component({
  components:{}
})
export default class ViewComponent extends Vue {

}
</script>

<style lang="stylus" scoped>
nav
  background-color crimson 
  padding 30px 0
  margin-bottom 40px
  ul
    list-style-type none 
    text-align center
    margin 0
    li
      display inline-block
      margin 0 10px
a
  color #ffffff
  text-decoration  none
  padding 12px
  border-radius 5px
.router-link-active
  background-color rgba(255,255,255,.8)
  color #444
</style>