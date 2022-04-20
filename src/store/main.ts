import { defineStore } from 'pinia'
import { IUserInfo } from '@/api/types/common'
import { getItem, setItem } from '@/utils/storage'
import { USER } from '@/utils/constants'

export interface State {
  counter: number,
  menuExpand: boolean,
  user: IUserInfo | any
}
// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useMainStore = defineStore('main', {
  // a function that returns a fresh state
  state: (): State => ({
    counter: 0,
    menuExpand: true,
    user: getItem<IUserInfo>(USER)
  }),
  // optional getters
  getters: {
    // getters receive the state as first parameter
    doubleCount: (state) => state.counter * 2,
    // use getters in other getters
    doubleCountPlusOne (): number {
      return this.doubleCount + 1
    }
  },
  // optional actions
  actions: {
    reset () {
      // `this` is the store instance
      this.counter = 0
    },
    setUser (user: IUserInfo) {
      this.user = user
      setItem(USER, user)
    }
  }
})
