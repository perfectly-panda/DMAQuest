// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import Game from '@/models/Game'
import { useResourceStore } from '../../src/stores/ResourceStore';
import { useGameStore } from '../../src/stores/GameStore';
import StoryFlag from '@/models/StoryFlag';


describe('Game model', () => {

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it ('can start and stop', async () => {
    const store = createResourceStore()
    const spy = vi.spyOn(store.waitTime, 'increment')
    const instance = new Game()
    instance.stop()
    expect(instance.totalTicks).toBe(0)
    instance.start()
    await sleep(500)
    expect(instance.totalTicks).toBeGreaterThan(0)
    instance.stop()
    const first = instance.totalTicks
    await sleep(500)
    expect(instance.totalTicks).toBe(first)
    expect(spy).toHaveBeenCalled()
  })

  it ('can unlock resources', async () => {
    const store = createResourceStore()
    const gameStore = createGameStore()
    const instance = new Game(store, gameStore)
    gameStore.addStoryFlag(new StoryFlag('battery', 1))
    store.battery.addStatic(100)
    const spy = vi.spyOn(instance, '_unlockChecks')
    instance.runTick()
    expect(spy).toHaveBeenCalled()
    expect(gameStore.flags.story.length).toBe(2)
    expect(store.portal.count).toBe(1)
  })
})

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms))

function createResourceStore() {
  const pinia = createTestingPinia({ fakeApp: true, createSpy: vi.fn,})
  return useResourceStore(pinia)
}

function createGameStore() {
  const pinia = createTestingPinia({ fakeApp: true, createSpy: vi.fn,})
  const store =  useGameStore(pinia)

  store.addStoryFlag = function(flag: StoryFlag) {
    this.flags.story.push(flag)
  }

  return store
}

