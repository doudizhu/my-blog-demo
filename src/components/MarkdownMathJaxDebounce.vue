<template>
  <span ref="mathJaxEl" v-html="readMD()" class="e-mathjax"></span>
</template>

<script>
/**
 * 去抖
 * @param {*} fn // 回调方法
 * @param {*} delay // 延迟执行时间
 */
function debounce (fn, delay=400) {
  let timer = null;

  return () => {
    let args = arguments; // 回调方法参数
    let context = this; // 自身上下文

    if (timer) { // 每次触发后清除时间函数值
      clearTimeout(timer);
    }
    
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  }
}

// https://gist.github.com/sebastien-attia/15df6e76a84ea5100c3b9b1a195d7540
var MarkdownIt = require('markdown-it'),
  // md = new MarkdownIt();
  md = new MarkdownIt({ // 加入此行可将html标签<center><video>识别编译
    injected: true,
    preset: 'default',
    linkify: true,
    html: true,
    // breaks: false,
    use: [
      'markdown-it-mathjax',
      'markdown-it-container',
      'markdown-it-attrs'
    ]
  });

export default {
  props: [ 'mdData' ],

  data(){
    return {
      debounceRenderMathJax:()=>{}
    }
  },
  created(){
    this.debounceRenderMathJax = debounce(this.renderMathJax,1000)
  },

  methods: {
    readMD () {
      const html = md.render(this.mdData)
      this.debounceRenderMathJax()
      return html
//       return md.render(`When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
// $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$`)
    },

    renderMathJax () {
      if(window.MathJax) {
        window.MathJax.Hub.Config({
          tex2jax: {
            inlineMath: [ ['$','$'], ["\(","\)"] ],
            displayMath: [ ['$$','$$'], ["\[","\]"] ],
            processEscapes: true,
            processEnvironments: true
          },
          // Center justify equations in code and markdown cells. Elsewhere
          // we use CSS to left justify single line equations in code cells.
          displayAlign: 'center',
          "HTML-CSS": {
            styles: {'.MathJax_Display': {"margin": 0}},
            linebreaks: { automatic: true }
          }
        });
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub,this.$refs.mathJaxEl]);
      }
    }
  },

  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML' }
    ]
  },

  mounted () {
    this.renderMathJax()
    // this.debounceRenderMathJax()
  }
}
</script>