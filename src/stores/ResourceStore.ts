import { defineStore, type Store } from 'pinia'
import Resource from '@/models/Resource'
import type { IResourceStore } from '../types/IStore'

export const useResourceStore = defineStore('resources', {
  state: (): IResourceStore => ({
    intro: new Resource(-1),
    waitTime: new Resource(0, 'Wait Time', 'Time spent waiting in line', (1 / 60)),
    chairs: new Resource(1, 'Chairs', 'Chairs left in the waiting room'),
    people: new Resource(2, 'People', 'People in line'),
    battery: new Resource(3, 'Battery', 'Phone battery'),
  }),
  getters: {
  },
})

export type ResourceStore = typeof useResourceStore