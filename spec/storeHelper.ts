import { createTestingPinia } from "@pinia/testing"
import { vi } from "vitest"
import { useGameStore } from "../src/stores/GameStore"
import { useResourceStore } from "../src/stores/ResourceStore"
import StoryFlag from "../src/models/StoryFlag"

export function createResourceStore() {
  const pinia = createTestingPinia({ fakeApp: true, createSpy: vi.fn,})
  return useResourceStore(pinia)
}

export function createGameStore() {
  const pinia = createTestingPinia({ fakeApp: true, createSpy: vi.fn,})
  const store =  useGameStore(pinia)

  store.addStoryFlag = function(flag: StoryFlag) {
    this.flags.story.push(flag)
  }

  return store
}