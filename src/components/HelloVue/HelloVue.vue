<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i-button
      type="success"
      size="large"
      :style="buttonStyle"
      icon="md-arrow-forward"
      @click="linkToConf">查看文档</i-button>
    <div class="demo">
      <i-button
        type="success"
        size="large"
        :style="buttonStyle"
        icon="md-arrow-forward"
        @click="linkToDemo">Demo组件</i-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'iview'

const buttonStyle = {
  background: '#42b983',
  width: '120px'
}

export default {
  name: 'HelloWorld',
  data () {
    return {
      buttonStyle
    }
  },
  props: {
    msg: String
  },
  components: {
    'i-button': Button
  },
  methods: {
    linkToConf () {
      window.open('http://conf.k2data.com.cn:18080/pages/viewpage.action?pageId=5669331')
    },
    linkToDemo () {
      this.$router.push('/demo')
    }
  }
}
</script>

<style scoped lang="less">
h1 {
  margin: 20px auto;
}
.demo {
  margin-top: 10px;
}
</style>
