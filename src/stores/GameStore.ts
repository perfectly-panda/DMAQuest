import { defineStore } from 'pinia'
import type Flag from '@/models/Flag'

export const useGameStore = defineStore('game', {
  state: () => ({
    tabs: {
      currentTab: 'Story',
      options: ['Story'],
    },
    flags: {
      globals: Array<string>(),
      story: Array<Flag>(),
    }
  }),
  getters: {
    globals: state => state.flags.globals,
    story: state => state.flags.story,
  },
  actions: {
    addStoryFlag(flag: Flag) {
      if(!this.flags.story.find((i: Flag) => i.text == flag.text)){
        this.flags.story.push(flag)
        this.flags.story.sort((a, b) => b.order - a.order)
      }
    }
  }
})