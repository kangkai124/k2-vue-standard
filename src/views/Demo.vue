<template>
  <div class="demo">
    <header>
      <BreadCrumb :list="list"></BreadCrumb>
    </header>
    <h1>This is an demo page</h1>
  </div>
</template>
<script>
import BreadCrumb from '@/components/BreadCrumb'

export default {
  name: 'demo-page',
  data () {
    return {
      list: [
        { to: '/', name: 'Home' },
        { name: 'Demo' }
      ]
    }
  },
  components: {
    BreadCrumb
  }
}
</script>
<style lang="less" scoped>
header {
  height: 50px;
  line-height: 50px;
  text-align: left;
}
</style>
