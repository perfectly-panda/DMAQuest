import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
  state: () => ({
    tabs: {
      currentTab: 'Story',
      options: ['Story'],
    },
    flags: {
      globals: ["showText"],
      story: ["intro"],
    }
  }),
  getters: {
    globals: state => state.flags.globals,
    story: state => state.flags.story
  },
})