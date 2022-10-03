import { defineStore } from 'pinia'

export const useStoryStore = defineStore('story', {
  state: () => ({
    intro: { en: 'So I had to get my internet license renewed, and you know how things are at the Digital Movement Authority...' 
    },
    waitTime: {
      en: [
        'It feels like forever, but actually I\'d only been waiting for',
        "minutes.",
        "Wait Time:"
      ]
    },
    chairs: {
      en: [
        "Looks like there are only",
        "chairs left.",
        "Chairs:"
      ]
    }
  }),
  getters: {
  },
})