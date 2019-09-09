<template lang='pug'>
  #show-blogs(v-theme:column='"narrow"')
    h1 博客总览
    input(v-model='search' placeholder='搜索')
    .single-blog(v-for='item in filteredBlogs')
      router-link(:to="'/blog/'+item.id")
        h2(v-rainbow) {{item.title | to-uppercase}}
      article {{item.body | snippet}}

</template>

<script lang="ts">
import {Component,Vue,} from 'vue-property-decorator'
@Component({
  components:{},
  /**filter */
  filters: {
    // 'to-uppercase': (value: string) => value.toUpperCase(),
    // toUppercase: (value: string) => value.toUpperCase(),
    toUppercase(value: string){ 
      return value.toUpperCase()
    },
  },
  directives:{
    rainbow:{
      bind(el,binding,value){
        el.style.color = '#'+Math.random().toString(16).slice(2,8)
      },
    },
  }
})
export default class ViewComponent extends Vue {
  /**data */
  blogs = []
  search = ''
  /**computed */
  get filteredBlogs() {
    return this.blogs.filter((blog:any)=>{
      return blog.title.match(this.search)
    })
  }
  
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
  input
    padding 8px
    width 100%
    box-sizing border-box
  a
    color #444
    text-decoration none 

  .single-blog
    padding 20px
    margin 20px 0
    box-sizing border-box
    background #eee


</style>
