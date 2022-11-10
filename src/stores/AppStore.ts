import { PhoneApp } from "@/models/PhoneApp";
import { defineStore } from "pinia";

export const useAppStore = defineStore('appStore', {
  state: () => ({
    apps: [ 
      new PhoneApp({id: 'rpgable', name: 'Hidden App', description: "What's this?", space:.5, installed:true, canRemove: false}),
      new PhoneApp({id: 'crypto', name: "Catsuna Coin", description: "Investing for only the most gullible.", space: .25}),
    ],
    activeApp: null
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
    installApp (id: string, totalSpace: number) {
      const app = this.getApp(id)
      if(app && app.space <= totalSpace) {
        app.installed = true
      }
    },
    removeApp (id: string) {
      const app = this.getApp(id)
      if(app && app.canRemove){
        app.installed = false
      }
    }
  }
})