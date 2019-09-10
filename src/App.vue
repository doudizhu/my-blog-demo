<template lang='pug'>
  #id
    //- AddBlog
    //- ShowBlogs
    //- BlogHeader
    router-view
</template>

<script lang="ts">
import AddBlog from "./components/AddBlog.vue";
import ShowBlogs from "./components/ShowBlogs.vue";
import BlogHeader from "./components/BlogHeader.vue";

import {Component,Vue,} from 'vue-property-decorator'
@Component({
  components:{AddBlog,ShowBlogs,BlogHeader,}
})
export default class ViewComponent extends Vue {

}
</script>

