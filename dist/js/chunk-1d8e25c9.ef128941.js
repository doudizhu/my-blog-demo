(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d8e25c9"],{"5e76":function(t,e,n){"use strict";var a=n("9dbb"),o=n.n(a);o.a},"9dbb":function(t,e,n){},ca75:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container"},[t._m(0),n("div",{staticClass:"editor-container"},[n("el-tag",{staticClass:"tag-title"},[t._v("\n      Basic:\n    ")]),n("markdown-editor",{attrs:{height:"300px"},model:{value:t.content1,callback:function(e){t.content1=e},expression:"content1"}})],1),n("div",{staticClass:"editor-container"},[n("el-tag",{staticClass:"tag-title"},[t._v("\n      Markdown Mode:\n    ")]),n("markdown-editor",{ref:"markdownEditor",attrs:{options:{hideModeSwitch:!0,previewStyle:"tab"},height:"200px"},model:{value:t.content2,callback:function(e){t.content2=e},expression:"content2"}})],1),n("div",{staticClass:"editor-container"},[n("el-tag",{staticClass:"tag-title"},[t._v("\n      Customize Toolbar:\n    ")]),n("markdown-editor",{attrs:{options:{toolbarItems:["heading","bold","italic"]}},model:{value:t.content3,callback:function(e){t.content3=e},expression:"content3"}})],1),n("div",{staticClass:"editor-container"},[n("el-tag",{staticClass:"tag-title"},[t._v("\n      I18n:\n    ")]),n("el-alert",{attrs:{closable:!1,title:"You can change the language of the admin system to see the effect",type:"success"}}),n("markdown-editor",{ref:"markdownEditor",attrs:{language:t.language,height:"300px"},model:{value:t.content4,callback:function(e){t.content4=e},expression:"content4"}})],1),n("el-button",{staticStyle:{"margin-top":"80px"},attrs:{type:"primary",icon:"el-icon-document"},on:{click:t.getHtml}},[t._v("\n    Get HTML\n  ")]),n("div",{domProps:{innerHTML:t._s(t.html)}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",[t._v("Markdown is based on\n    "),n("a",{attrs:{href:"https://github.com/nhnent/tui.editor",target:"_blank"}},[t._v("tui.editor")]),t._v(" ，simply wrapped with Vue.\n    "),n("a",{attrs:{target:"_blank",href:"https://panjiachen.github.io/vue-element-admin-site/feature/component/markdown-editor.html"}},[t._v("\n      Documentation ")])])}],i=n("16d8"),s='\n**This is test**\n\n* vue\n* element\n* webpack\n<video>\n  <source id="mp4" src="http://img.blog.fandong.me/2017-08-26-Markdown-Advance-Video.mp4" type="video/mp4">\n</video>\n\n',c={name:"MarkdownDemo",components:{MarkdownEditor:i["a"]},data:function(){return{content1:s,content2:s,content3:s,content4:s,html:"",languageTypeList:{en:"en_US",zh:"zh_CN",es:"es_ES"}}},computed:{language:function(){return this.languageTypeList["en"]}},methods:{getHtml:function(){this.html=this.$refs.markdownEditor.getHtml(),console.log(this.html)}}},r=c,l=(n("5e76"),n("2877")),d=Object(l["a"])(r,a,o,!1,null,"7f8d3a4b",null);e["default"]=d.exports}}]);