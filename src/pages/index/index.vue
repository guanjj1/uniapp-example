<!--
 * @Author: guanjiajun www.guanjiajun@ewake.com
 * @Date: 2023-05-12 19:23:53
 * @LastEditors: guanjiajun www.guanjiajun@ewake.com
 * @LastEditTime: 2023-05-15 19:31:17
 * @FilePath: \uniapptest\my-vue3\src\pages\index\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="nav-gation">
    <view class="nav-top"></view>
    <view class="nav-height">某某省第一人民医院</view>
  </view>
  <view class="nav-buttom">
    <image mode="aspectFill" src="../../static/index/bc.svg"></image>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/initStores'
const store = useStore()
const p = store.MenuButtonBoundingClientRect
let menu_top = String(p.top) + 'px'
// console.log(menu_top)
// console.log(p.top)
let menu_height = String(p.height) + 'px'
</script>

<style scoped lang="scss">
@media screen {
  .nav-gation {
    .nav-top {
      height: v-bind('menu_top');
    }

    .nav-height {
      height: v-bind('menu_height');
      line-height: v-bind('menu_height');
    }
  }

  .nav-buttom {
    image {
      height: 300px;
      width: 100%;
      display: block;
    }
  }
}
</style>
