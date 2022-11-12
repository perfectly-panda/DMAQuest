import { PhoneApp } from "@/models/PhoneApp";
import { defineStore } from "pinia";
import { useResourceStore } from "./ResourceStore";

export const useAppStore = defineStore('appStore', {
  state: () => ({
    apps: [ 
      new PhoneApp({id: 'mystery', name: 'Mystery App', description: "What's this?", space:.5, installed:true, canRemove: false}),
      new PhoneApp({id: 'crypto', name: "Catsuna Coin", description: "Investing for only the most gullible.", space: .25}),
      new PhoneApp({id: 'resourceApp', name: 'Resource Monitor', description: 'View all your resource data.', space: .1, available: true}),
      new PhoneApp({id: 'delivery', name: 'paacket', description: 'Get anything delivered. ANYTHING', space: .3, available: true}),

    ] as PhoneApp[],
    activeApp: undefined as PhoneApp | undefined,
  }),
  getters: {
    spaceRequired (state): number {
      return this.installedApps.reduce((a, b) => a + b.space, 0)
    },
    availableApps (state): Array<PhoneApp> {
      return state.apps.filter((app) => app.available && !app.installed)
    },
    installedApps (state): Array<PhoneApp> {
      return state.apps.filter((app) => app.installed)
    },
    getApp: (state) => (id: string) : PhoneApp | undefined => state.apps.find((f) => f.id === id),
    isAppInstalled: (state) => (id: string) : boolean => state.apps.some((f) => f.id === id && f.installed),
  },
  actions: {
    installApp (id: string) {
      const app = this.getApp(id)
      const resourceStore = useResourceStore()
      const spaceAvailabile = resourceStore.memory.count
      if(app && app.space <= spaceAvailabile) {
        app.installed = true
        resourceStore.memory.addStatic(app.space * -1)
      }
    },
    removeApp (id: string) {
      const app = this.getApp(id)
      const resourceStore = useResourceStore()
      if(app && app.canRemove){
        app.installed = false
        resourceStore.memory.addStatic(app.space)
      }
    },
    loadSaveData (data: any) {
      if(data && data.apps) {
        for(const app of data.apps) {
          const appData = this.getApp(app.id)
          if(appData) {
            appData.load(app)
          }
        }
      }

      if(data.activeApp) {
        this.activeApp = data.activeApp
      }
    }
  }
})