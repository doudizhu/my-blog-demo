<template lang='pug'>
  .add-blog
    h2 添加博客
    form(v-if='!submmited')
      label 博客标题
      input(v-model='blog.title' required)
      label 博客内容
      textarea(v-model='blog.content')

      #checkboxes
        label Vue.js
        input(type='checkbox' value='Vue.js' v-model='blog.catefories')
        label Node.js
        input(type='checkbox' value='Node.js' v-model='blog.catefories')
        label React.js
        input(type='checkbox' value='React.js' v-model='blog.catefories')
        label Angular4
        input(type='checkbox' value='Angular4' v-model='blog.catefories')
      
      label 作者
      select(v-model='blog.author')
        option(v-for='item in authors') {{item}}
      
      button(@click.prevent='post') 添加博客


    #preview
      h3 博客总览
      p 博客标题：{{blog.title}}
      p 博客内容：
      p {{blog.content}}
      p 博客分类：
      ul
        li(v-for='item in blog.catefories') {{item}}

    div(v-if='submmited')
      h3 您的博客发布成功！
</template>

<script lang="ts">
import {Component,Vue,} from 'vue-property-decorator'
@Component({
  components:{}
})
export default class ViewComponent extends Vue {
  /**data */
  blog = {
    title:'',
    content:'',
    catefories: [],
    author:'',
  }
  authors = ['Hemiah','Henry','Bucky']
  submmited = false

  /**method */
  post(){
    // 需要翻墙用
    // http://jsonplaceholder.typicode.com/
    // http://jsonplaceholder.typicode.com/posts
    (this.$http as any).post(
      'http://jsonplaceholder.typicode.com/posts',
      {
        title:this.blog.title,
        body:this.blog.content,
        userId:1,
      },
    ).then((data:any)=>{
      // console.log('data',data)
      this.submmited = true
    })
  }
}
</script>

<style scoped lang="stylus">
</style>
