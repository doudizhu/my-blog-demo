<template>
  <div ref='mdContainer' :id="id" />
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

// deps for editor
import 'codemirror/lib/codemirror.css' // codemirror
import 'tui-editor/dist/tui-editor.css' // editor ui
import 'tui-editor/dist/tui-editor-contents.css' // editor content

import Editor from 'tui-editor'
import defaultOptions from './default-options'

export default {
  name: 'MarddownEditor',
  props: {
    value: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      required: false,
      default() {
        return 'markdown-editor-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
      }
    },
    options: {
      type: Object,
      default() {
        return defaultOptions
      }
    },
    mode: {
      type: String,
      default: 'markdown'
    },
    height: {
      type: String,
      required: false,
      default: '300px'
    },
    language: {
      type: String,
      required: false,
      default: 'en_US' // https://github.com/nhnent/tui.editor/tree/master/src/js/langs
    }
  },
  data() {
    return {
      editor: null,
      debounceFixedVideoControls:()=>{}
    }
  },
  computed: {
    editorOptions() {
      const options = Object.assign({}, defaultOptions, this.options)
      options.initialEditType = this.mode
      options.height = this.height
      options.language = this.language
      return options
    }
  },
  watch: {
    value(newValue, preValue) {
      if (newValue !== preValue && newValue !== this.editor.getValue()) {
        this.editor.setValue(newValue)
      }
    },
    language(val) {
      this.destroyEditor()
      this.initEditor()
    },
    height(newValue) {
      this.editor.height(newValue)
    },
    mode(newValue) {
      this.editor.changeMode(newValue)
    }
  },
  mounted() {
    this.initEditor()
    this.debounceFixedVideoControls = debounce(this.fixedVideoControls,3000)
  },
  destroyed() {
    this.destroyEditor()
  },
  methods: {
    initEditor() {
      this.editor = new Editor({
        el: document.getElementById(this.id),
        ...this.editorOptions
      })
      if (this.value) {
        this.editor.setValue(this.value)
      }
      this.editor.on('change', () => {
        this.$emit('input', this.editor.getValue())
        this.debounceFixedVideoControls()
      })
    },
    destroyEditor() {
      if (!this.editor) return
      this.editor.off('change')
      this.editor.remove()
    },
    setValue(value) {
      this.editor.setValue(value)
    },
    getValue() {
      return this.editor.getValue()
    },
    setHtml(value) {
      this.editor.setHtml(value)
    },
    getHtml() {
      return this.editor.getHtml()
    },

    fixedVideoControls(){ // 修复markdown编译为html后，video标签丢失cotrols字段问题
      const video = this.$refs['mdContainer'] && this.$refs['mdContainer'].querySelector('video');
      if(video && !video.getAttribute('controls')){
        video.setAttribute('controls','controls')
      }
    }
  }
}
</script>
