import type Resource from "@/models/Resource"

export type IResourceStore = {
  intro: undefined,
  waitTime: Resource,
  chairs: Resource,
  people: Resource,
}

export type ResourceType = keyof IResourceStore