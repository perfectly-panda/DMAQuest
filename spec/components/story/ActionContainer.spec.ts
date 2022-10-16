// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { mount } from "@vue/test-utils";
import { createGameStore, createResourceStore } from '../../storeHelper';
import ActionContainer from '@/components/story/ActionContainer.vue'
import StoryFlag from '../../../src/models/StoryFlag';
import Resource from '../../../src/models/Resource'


describe('ActionContainer', function () {
  it('can set waittime', function () {
    const store = createResourceStore()
    const gameStore = createGameStore()

    const instance = mount(ActionContainer)
    expect(instance).toBeTruthy()

    instance.find('#waitTime').trigger('click')
    expect(gameStore.checkStoryFlag('waitTime')).toBeTruthy()
  })
  
  it("can set chair", function () {
    const store = createResourceStore()
    const resourceSpy = vi.spyOn(store.chairs, 'addStatic')
    const gameStore = createGameStore()
    const gameSpy = vi.spyOn(gameStore, 'addStoryFlag')
    gameStore.addStoryFlag(new StoryFlag('waitTime', 0))

    const instance = mount(ActionContainer)

    instance.find('#findChair').trigger('click')
    expect(gameSpy).toHaveBeenCalled()
    expect(resourceSpy).toHaveBeenCalled()
  })
})