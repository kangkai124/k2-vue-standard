<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloVue msg="K2能源电力事业部前端 vue 开发规范"/>
    <div class="team">
      <IAvatar
        size="large"
        :style="{margin: '10px'}"
        v-for="(item, index) in team"
        :key="index">{{item}}</IAvatar>
    </div>
  </div>
</template>

<script>
import { Avatar } from 'iview'
import HelloVue from '@/components/HelloVue'

const team = [
  'HAO', 'KK', 'YOU', 'BANG', 'YU', 'HENG', 'CHUN'
]

const list = [
  { to: '/', name: '主页' },
  { name: 'about' }
]

export default {
  name: 'home',
  data () {
    return {
      team,
      list
    }
  },
  components: {
    HelloVue,
    IAvatar: Avatar
  }
}
</script>
<style scoped="">
  .home {
    padding-top: 40px;
  }

  .team {
    position: absolute;
    top: 80vh;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 10px;
  }
</style>
