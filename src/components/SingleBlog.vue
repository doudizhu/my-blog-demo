<template lang="pug">
  .single-blog
    h1 {{blog.title}}
    //- article {{blog.body}}
    article {{blog.content}}
    p 作者；{{blog.author}}
    p 分类
    ul
      li(v-for='item in blog.categories') {{item}}
</template>

<script lang="ts">
import {Component,Vue,} from 'vue-property-decorator'
@Component({
  components:{}
})
export default class ViewComponent extends Vue {
  /**data */
  id = ''
  blog = {}

  /**life hook */  
  // created(){
  //   this.id = this.$route.params.id;
  //   // (this.$http as any).get('./json/posts.json'+this.id) // ***注意：此处是相对于当前的html文件
  //   (this.$http as any).get('https://jsonplaceholder.typicode.com/posts/'+this.id) // ***注意：此处需要翻wall切换
  //     .then((data:any)=>{
  //       // console.log(data)
  //       this.blog = data.body
  //     })
  // }
  created(){
    this.id = this.$route.params.id;
    (this.$http as any).get('https://my-blog-demo-632c9.firebaseio.com/posts/'+this.id+'.json')
      .then((data:any)=>{
        // console.log('data.json():',data.json())
        return data.json()
      })
      .then((data:any)=>{
        console.log(data)
        this.blog = data
      })
  }
}
</script>

<style lang="stylus" scoped>
#single-blog
  max-width 960px
  margin 0 auto 
  padding 20px
  background #eeeeee
  border 1px dotted #aaaaaa
</style>