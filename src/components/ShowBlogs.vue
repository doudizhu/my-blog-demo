<template lang='pug'>
  #show-blogs(v-theme:column='"narrow"')
    h1 博客总览
    .single-blog(v-for='item in blogs')
      h2(v-rainbow) {{item.title}}
      article {{item.body}}

</template>

<script lang="ts">
import {Component,Vue,} from 'vue-property-decorator'
@Component({
  components:{}
})
export default class ViewComponent extends Vue {
  /**data */
  blogs = []
  
  /**life hook */
  created(){
    // (this.$http as any).get('http://jsonplaceholder.typicode.com/posts')
      //   .then((data:any)=>{
      //     // console.log(data)
      //     this.blogs = data.body.slice(0,10)
      //     // console.log('this.blogs',this.blogs)
      //   })
      
    // setTimeout(()=>{
    //   (this.$http as any).get('http://jsonplaceholder.typicode.com/posts')
    //     .then((data:any)=>{
    //       // console.log(data)
    //       this.blogs = data.body.slice(0,10)
    //       // console.log('this.blogs',this.blogs)
    //     })
    // },5000)
    
    (this.$http as any).get('./json/posts.json') // ***注意此处是相对于当前的html文件
      .then((data:any)=>{
        // console.log(data)
        this.blogs = data.body.slice(0,10)
        // console.log('this.blogs',this.blogs)
      })
  }
  /**method */

}
</script>

<style scoped lang="stylus">
#show-blogs
  max-width 800px
  margin 0 auto

.single-blog
  padding 20px
  margin 20px 0
  box-sizing border-box
  background #eee
</style>
