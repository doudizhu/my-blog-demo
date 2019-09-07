<template lang='pug'>
  #id
    AddBlog
</template>

<script lang="ts">
import AddBlog from "./components/AddBlog.vue";

import {Component,Vue,} from 'vue-property-decorator'
@Component({
  components:{AddBlog}
})
export default class ViewComponent extends Vue {

}
</script>