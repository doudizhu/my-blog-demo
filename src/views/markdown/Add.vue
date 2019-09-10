<template lang='pug'>
  #add-blog
    h2 添加博客
    form(v-if='!submmited')
      label 博客标题
      input(v-model='blog.title' required)
      label 博客内容
      //- textarea(v-model='blog.content')
      MarkdownEditor(v-model='blog.content' ref='markdownEditor')

      #checkboxes
        label Vue.js
        input(type='checkbox' value='Vue.js' v-model='blog.categories')
        label Node.js
        input(type='checkbox' value='Node.js' v-model='blog.categories')
        label React.js
        input(type='checkbox' value='React.js' v-model='blog.categories')
        label Angular4
        input(type='checkbox' value='Angular4' v-model='blog.categories')
      
      label 作者
      select(v-model='blog.author')
        option(v-for='item in authors') {{item}}
      
      button(@click.prevent='post') 添加博客


    #preview(v-show='submmited')
      h3 博客总览
      p 博客标题：{{blog.title}}
      p 博客内容：
      //- p {{blog.content}}
      div(ref='markdownPreview') dd
        div(v-html="html")
      p 博客分类：
      ul
        li(v-for='item in blog.categories') {{item}}

    div(v-if='submmited')
      h3 您的博客发布成功！
</template>

<script lang="ts">
import MarkdownEditor from '@/components/MarkdownEditor/index.vue'
import {Component,Vue,} from 'vue-property-decorator'
@Component({
  components:{MarkdownEditor}
})
export default class ViewComponent extends Vue {
  /**data */
  blog = {
    title:'',
    content:'',
    categories: [],
    author:'',
  }
  authors = ['Hemiah','Henry','Bucky']
  submmited = false
  html = ''

  mounted(){
    console.log(this.$refs['previewMdHtml'])
  }

  /**method */
  post(){
    (this.$http as any).post(
      'https://my-blog-demo-632c9.firebaseio.com/posts.json',
      this.blog,
    ).then((data:any)=>{
      this.submmited = true

      const markdownEditor = this.$refs['markdownEditor'] as any;
      this.html = markdownEditor.getHtml()

      setTimeout(()=>{
        const markdownPreview = (this.$refs['markdownPreview'] as any)
        console.log(`markdownPreview:`,markdownPreview)
        const video = markdownPreview.querySelector('video')
        if(video && !video.getAttribute('controls')){
          video.setAttribute('controls','controls')
        };
      },1000)
      
      
      this.submmited = true
    })
  }
}
</script>

<style scoped lang="stylus">
#add-blog *
  box-sizing border-box
#add-blog
  margin 20px auto 
  max-width 600px
  padding 20px
  label
    display block
    margin 20px 0 10px
  input[type='text'],textarea,select
    display block
    width 100%
    padding 8px
  textarea
    height 200px
#checkbox 
  label
    display inline-block
    margin-top 0
  input
    display inline-block
    margin-top 0

button 
  display block
  margin 20px 0
  background crimson 
  color #ffffff
  border 0
  padding 14px
  border-radius 10px
  font-size 18px
  cursor pointer

#preview
  padding 10px 20px
  border 1px dotted #cccccc
  margin 30px 0
  h3
    margin-top 10px
</style>
