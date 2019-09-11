<template lang="pug">
  .single-blog
    button(@click='deleteSingleBlog') 删除
    router-link(:to='"/markdown/edit/"+id') 编辑
    h1 {{blog.title}}
    //- article {{blog.body}}
    //- article {{blog.content}}
    div(ref='markdownPreview' v-show='false')
      div(v-html="html")
    MarkdownEditor(v-model='blog.content' ref='markdownEditor' v-show='false')
    MarkdownMathJax(:mdData='blog.content || ""')
    p 作者；{{blog.author}}
    p 分类
    ul
      li(v-for='item in blog.categories') {{item}}
</template>

<script lang="ts">
import MarkdownMathJax from "@/components/MarkdownMathJax.vue";
import Editor from 'tui-editor'
import MarkdownEditor from '@/components/MarkdownEditor/index.vue'
import {Component,Vue,} from 'vue-property-decorator'
@Component({
  components:{MarkdownEditor,MarkdownMathJax}
})
export default class ViewComponent extends Vue {
  /**data */
  id = ''
  blog = {}
  html = ''

  /**life hook */
  created(){
    this.id = this.$route.params.id;
    (this.$http as any).get('https://my-blog-demo-632c9.firebaseio.com/posts/'+this.id+'.json')
      .then((data:any)=>{
        // console.log('data.json():',data.json())
        return data.json()
      })
      .then((data:any)=>{
        // console.log(data)
        this.blog = data
        console.log('this.html before',this.html)
        // // 方式一（尚存在问题）:直接使用插件转译成html：有时转化 会吧折行字符串边，编译到一个标签内
        // import('showdown' as any).then((showdown:any) => { //用了 Dynamic import
        //   const converter = new showdown.Converter();//初始化
        //   this.html = converter.makeHtml(data.content)//转化
        //   console.log('this.html after',this.html)
        // })
        // 方式二：引入tui.editor插件getHtml方法，转换html
        this.$nextTick(() => {
          const markdownEditor = this.$refs['markdownEditor'] as any;
          this.html = markdownEditor.getHtml()

          setTimeout(()=>{
            const markdownPreview = (this.$refs['markdownPreview'] as any)
            // console.log(`markdownPreview:`,markdownPreview)
            const video = markdownPreview.querySelector('video')
            if(video && !video.getAttribute('controls')){
              video.setAttribute('controls','controls')
            };
          },1000)
        })
      })
  }

  /**method */
  deleteSingleBlog(){
    (this.$http as any).delete('https://my-blog-demo-632c9.firebaseio.com/posts/'+this.id+'.json')
      .then((response:any)=>{
        this.$router.push({path:'/'})
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