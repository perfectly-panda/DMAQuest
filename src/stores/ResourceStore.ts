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
    portal: new Resource(4, 'Portal', 'Where did this come from?'),
    wizard: new Resource(5, 'Wizard', 'A wizard?'),
    chipmunk: new Resource(6, 'Chipmunk', 'So cute!'),
  }),
  getters: {
  },
})

export type ResourceStore = typeof useResourceStore