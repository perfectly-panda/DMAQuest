import { defineStore, type Store } from 'pinia'
import { Resource } from '@/models/Resource'
import type { IResourceStore } from '../types/IStore'

export const useResourceStore = defineStore('resources', {
  state: (): IResourceStore => ({
    intro: new Resource({id: -1}),
    waitTime: new Resource({id:0, name:'Wait Time', description:'Time spent waiting in line', perSecond:(1 / 60)}),
    chairs: new Resource({id:1, name:'Chairs', description:'Chairs left in the waiting room'}),
    people: new Resource({id:2, name:'People', description:'People in line'}),
    battery: new Resource({id:3, name:'Battery', description:'Phone battery'}),
    portal: new Resource({id:4, name:'Portal', description:'Where did this come from?'}),
    wizard: new Resource({id:5, name:'Wizard', description:'A wizard?'}),
    chipmunk: new Resource({id:6, name:'Chipmunk', description:'So cute!'}),
    cash: new Resource({id: 7, name: 'Cash', description: 'Meow', startingValue: 20}),
    crypto: new Resource({id:8, name:'Crypto', description:'Much rich. So wow.'}),
    memory: new Resource({id:9, name:'Memory', description:'How much memory does your phone have?', startingValue: .5, max: 1}),
  }),
  getters: {
    resources(state): Array<Resource> {
      return Object.values(state)
    }
  },
})

export type ResourceStore = typeof useResourceStore