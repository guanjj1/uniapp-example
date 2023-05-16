/*
 * @Author: guanjiajun www.guanjiajun@ewake.com
 * @Date: 2023-05-13 19:18:29
 * @LastEditors: guanjiajun www.guanjiajun@ewake.com
 * @LastEditTime: 2023-05-13 19:33:16
 * @FilePath: \uniapptest\my-vue3\src\stores\initStores.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
export const useStore = defineStore('MenuButton', {
  state: () => {
    const res = uni.getMenuButtonBoundingClientRect()
    return {
      MenuButtonBoundingClientRect: res,
    }
  },
})
