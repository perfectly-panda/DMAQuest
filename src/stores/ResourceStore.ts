import { defineStore } from 'pinia'
import Resource from '@/models/Resource'

export const useResourceStore = defineStore('resources', {
  state: () => ({
    resources: {
      waitTime: new Resource(0, 'Wait Time', 'Time spent waiting in line', (1 / 60)),
      chairs: new Resource(0, 'Chairs', 'Chairs left in the waiting room', 0),
    }
  }),
  getters: {
    waitTime: state => state.resources.waitTime,
    chairs: state => state.resources.chairs
  },
})