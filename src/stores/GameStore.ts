import { defineStore } from 'pinia'
import type Flag from '@/models/Flag'
import type { IStoryFlag } from '@/types/IStoryFlag'

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
    getStoryFlags: (state) : Array<IStoryFlag> => {
      return state.flags.story.map((f) => f.text)
    },
    checkStoryFlag: (state) => (flag: string) : boolean => {
      return state.flags.story.some((f) => f.text === flag)
    }
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