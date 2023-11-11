import { defineStore, type Store } from 'pinia'
import { Resource } from '@/models/Resource'
import type { IResourceStore } from '../types/IStore'

export const useResourceStore = defineStore('resources', {
  state: (): IResourceStore => ({
    intro: new Resource({id: 'intro'}),
    waitTime: new Resource({id:'waitTime', name:'Wait Time', description:'Time spent waiting in line', perSecond:(1 / 60)}),
    chairs: new Resource({id:'chairs', name:'Chairs', description:'Chairs left in the waiting room'}),
    people: new Resource({id:'people', name:'People', description:'People in line'}),
    battery: new Resource({id:'battery', name:'Battery', description:'Phone battery'}),
    portal: new Resource({id:'portal', name:'Portal', description:'Where did this come from?'}),
    wizard: new Resource({id:'wizard', name:'Wizard', description:'A wizard?'}),
    chipmunk: new Resource({id:'chipmunk', name:'Chipmunk', description:'So cute!'}),
    cash: new Resource({id: 'cash', name: 'Cash', description: 'Meow', startingValue: 20}),
    crypto: new Resource({id:'crypto', name:'Crypto', description:'Much rich. So wow.'}),
    memory: new Resource({id:'memory', name:'Memory', description:'How much memory does your phone have?', startingValue: .5, max: 1}),
    gold: new Resource({id:'gold', name:'Gold Coins', description:'Durable, but heavy.'}),
    cardboard: new Resource({id:'cardboard', name:'Cardboard', description:'Cardboard boxes'}),
  }),
  getters: {
    resources(state): Array<Resource> {
      return Object.values(state).filter((f) => f instanceof Resource)
    },
    visibleResources(state): Array<Resource> {   
      return Object.values(state).filter((f) => f instanceof Resource && f.visible)
    },
    getResourceByName: (state) => (name: string): Resource | undefined => {
      return Object.values(state).find((f) => f instanceof Resource && f.name === name)
    },
  },
  actions: {
    loadSaveData(data: any) {
      if (data) {
        for (const resourceKey of Object.keys(data)) {
          // @ts-ignore
          this[resourceKey].load(data[resourceKey])
        }
      }
    }
  }
})

export type ResourceStore = typeof useResourceStore