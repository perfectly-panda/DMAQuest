import { defineStore } from 'pinia'
import Resource from '@/models/Resource'

export const useResourceStore = defineStore('resources', {
  state: () => ({
    resources: {
      waitTime: new Resource(0, 'Wait Time', 'Time spent waiting in line', 1),
    }
  }),
  getters: {
    waitTime: state => state.resources.waitTime
  },
})