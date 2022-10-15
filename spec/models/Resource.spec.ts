import { afterEach, describe, expect, it, vi } from 'vitest'
import Resource from '@/models/Resource'

describe('Resource model', () => {

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('temp', () => {
    const instance = new Resource(0)
    expect(true).toBe(true)
  })

  describe('increment', () => {
    it('increments the count', () => {
      const instance = new Resource(0)
      instance.perSecond = 1
      expect(instance.count).toBe(0)
      instance.increment(1000)
      expect(instance.count).toBe(1)
    })

    it('applies modifiers', () => {
      const instance = new Resource(0)
      instance.perSecond = 1
      instance.modifier = 2
      expect(instance.count).toBe(0)
      instance.increment(1000)
      expect(instance.count).toBe(2)
    })

    it('does not apply modifiers when flag is set', () => {
      const instance = new Resource(0)
      instance.perSecond = 1
      instance.applyModifiers = false
      instance.modifier = 2
      expect(instance.count).toBe(0)
      instance.increment(1000)
      expect(instance.count).toBe(1)
    })
  })

  describe('addStatic', () => {
    it('adds to the count', () => {
      const instance = new Resource(0)
      expect(instance.count).toBe(0)
      instance.addStatic(1)
      expect(instance.count).toBe(1)
    })

    it('does not exceed the max', () => {
      const instance = new Resource(0)
      instance.max = 1
      expect(instance.count).toBe(0)
      instance.addStatic(2)
      expect(instance.count).toBe(1)
    })

    it('does not go below the min', () => {
      const instance = new Resource(0)
      instance.min = -1
      expect(instance.count).toBe(0)
      instance.addStatic(-2)
      expect(instance.count).toBe(-1)
    })
  })
})