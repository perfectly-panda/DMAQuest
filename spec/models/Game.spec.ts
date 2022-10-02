// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import Game from '@/models/Game'
import { useResourceStore } from '../../src/stores/ResourceStore';

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms))

  const pinia = createTestingPinia({ fakeApp: true, createSpy: vi.fn,
  initialState: {resources:{waitTime: {increment: vi.fn}}}})
  const store = useResourceStore(pinia)

describe('Game model', () => {

  const pinia = createTestingPinia({ fakeApp: true, createSpy: vi.fn,
  initialState: {resources:{waitTime: {increment: vi.fn}}}})
  const store = useResourceStore(pinia)

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it ('can start and stop', async () => {
    const spy = vi.spyOn(store.resources.waitTime, 'increment')
    const instance = new Game(store)
    instance.stop()
    expect(instance.totalTicks).toBe(0)
    instance.start()
    await sleep(500)
    expect(instance.totalTicks).toBeGreaterThan(0)
    instance.stop()
    const first = instance.totalTicks
    await sleep(100)
    expect(instance.totalTicks).toBe(first)
    expect(spy).toHaveBeenCalled()
  })
})
