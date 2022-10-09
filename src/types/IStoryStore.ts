import type StoryText from "@/models/StoryText"

export type IStoryStore = {
  intro: StoryText,
  waitTime: StoryText,
  chairs: StoryText,
  people: StoryText,
}

export type StoryType = keyof IStoryStore