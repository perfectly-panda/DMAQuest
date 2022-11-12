import { defineStore } from 'pinia'
import type StoryFlag from '@/models/StoryFlag'
import type { IStoryFlag } from '@/types/IStore'
import type { IGameStore} from '../types/IGameStore';
import { useResourceStore } from './ResourceStore';

export const useGameStore = defineStore('game', {
  state: (): IGameStore => ({
    tabs: {
      currentTab: 'Story',
      options: ['Story'],
    },
    flags: {
      globals: Array<string>(),
      story: Array<StoryFlag>(),
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
    addStoryFlag(flag: StoryFlag) {
      if(!this.flags.story.find((i: StoryFlag) => i.text == flag.text)){
        const resourceStore = useResourceStore()
        this.flags.story.push(flag)
        resourceStore[flag.text].visible = true
        this.flags.story.sort((a, b) => b.order - a.order)
      }
    },
    addTab(tab: string) {
      if(!this.tabs.options.includes(tab)){
        this.tabs.options.push(tab)
      }
    }
  }
})