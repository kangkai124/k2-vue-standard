<template>
  <div class="bread-crumb">
    <IBreadcrumb>
      <IBreadcrumbItem
        :to="item.to"
        :key="index"
        v-for="(item, index) in list">
        {{item.name}}
      </IBreadcrumbItem>
    </IBreadcrumb>
  </div>
</template>
<script>
import { Breadcrumb, BreadcrumbItem } from 'iview'

export default {
  name: 'bread-crumb',
  props: ['list'],
  components: {
    IBreadcrumb: Breadcrumb,
    IBreadcrumbItem: BreadcrumbItem
  }
}
</script>
<style lang="less" scoped>
  .bread-crumb {
    height: 100%;
    min-height: 40px;
    max-height: 60px;
  }
</style>
