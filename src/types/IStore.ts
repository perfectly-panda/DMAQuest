import type Resource from "@/models/Resource"
import type StoryText from "@/models/StoryText"

type IStore<T> = {
  intro: T,
  waitTime: T,
  chairs: T,
  people: T,
  battery: T,
}

export type IResourceStore = IStore<Resource>
export type IStoryStore = IStore<StoryText>

export type IStoryFlag = keyof IResourceStore | keyof IStoryStore