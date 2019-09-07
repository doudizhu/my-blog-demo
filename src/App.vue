<template lang='pug'>
  #id
    //- AddBlog
    ShowBlogs
</template>

<script lang="ts">
import AddBlog from "./components/AddBlog.vue";
import ShowBlogs from "./components/ShowBlogs.vue";

import {Component,Vue,} from 'vue-property-decorator'
@Component({
  components:{AddBlog,ShowBlogs}
})
export default class ViewComponent extends Vue {

}
</script>