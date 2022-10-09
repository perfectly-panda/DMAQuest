import { defineStore } from 'pinia'
import Resource from '@/models/Resource'
import type { IResourceStore } from '../types/IResourceStore'

export const useResourceStore = defineStore('resources', {
  state: (): IResourceStore => ({
    intro: undefined,
    waitTime: new Resource(0, 'Wait Time', 'Time spent waiting in line', (1 / 60)),
    chairs: new Resource(0, 'Chairs', 'Chairs left in the waiting room', 0),
    people: new Resource(0, 'People', 'People in line', 0),
  }),
  getters: {
  },
})