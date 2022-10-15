import type StoryFlag from "@/models/StoryFlag"

export type IGameStore = {
  tabs: {
    currentTab: string,
    options: Array<string>
  },
  flags: {
    globals: Array<string>,
    story: Array<StoryFlag>,
  }
}

export type IGameStoreGetters = { 
  getStoryFlags: Array<string>,
  checkStoryFlag: (flag: string) => boolean
}