import StoryText from '@/models/StoryText'
import { defineStore } from 'pinia'
import type { IStoryStore } from '../types/IStoryStore'

export const useStoryStore = defineStore('story', {
  state: (): IStoryStore => ({
    intro: new StoryText(['So I had to get my internet license renewed, and you know how things are at the Digital Movement Authority...' ]),
    waitTime: new StoryText([
        'It feels like forever, but actually I\'d only been waiting for',
        "minutes.",
        "Wait Time:"
      ]),
    chairs: new StoryText([
        "Looks like there are only",
        "chairs left.",
        "Chairs:"
      ]),
    people: new StoryText([])
  }),
  getters: {
  },
})