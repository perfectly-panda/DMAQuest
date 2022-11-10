import type { Resource } from "@/models/Resource"
import type StoryText from "@/models/StoryText"

type IStore<T> = {
  intro: T,
  waitTime: T,
  chairs: T,
  people: T,
  battery: T,
  portal: T,
  wizard: T,
  chipmunk: T,
  cash: T,
  crypto: T,
  memory: T,
}

export type IResourceStore = IStore<Resource>
export type IStoryStore = IStore<StoryText>

export type IStoryFlag = keyof IStore<object>