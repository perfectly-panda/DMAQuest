import { Upgrade } from "@/models/Upgrade";
import { defineStore } from "pinia";
import { useResourceStore } from "./ResourceStore";

export const useUpgradeStore = defineStore('upgrades', {
  state: () => ({
    upgrades: [
      new Upgrade({id: 'smBatteryPack', name: 'Small Battery Pack', description: 'Increases battery capacity by 1%', available: true, upgradeCost: 10, costMultiplier: 1.1, costResource: 'cash'}),
      new Upgrade({id:'cardboard', name:'Cardboard', description:'Increases cardboard by 1 box.', available: true, upgradeCost: 1, costMultiplier: 1.1, costResource: 'cash', }),
      /*
      bigger battery
      cardboard
      snacks
      */
    ] as Upgrade[],
  }),
  getters: {
    getUpdadeById: (state) => (id: string): Upgrade | undefined => {
      return state.upgrades.find((f) => f.id === id)
    },
    getAvailableUpgrades: (state) => () : Upgrade[] => {
      return state.upgrades.filter((f) => f.available)
    },
    getPurchasedUpgrades: (state) => (resource: string): Array<Upgrade> => {
      const upgrades = Object.values(state).filter((f) => f instanceof Upgrade 
        && f.purchased > 0)
      
      if(resource !== 'all') {
        return upgrades.filter((f) => f.costResource === resource)
      }
      return upgrades
    },
  },
  actions: {
    purchaseUpgrade(id: string) {
      console.log("purchaseUpgrade", id)
      const upgrade = this.getUpdadeById(id)
      if (upgrade) {
        const resource = useResourceStore()[upgrade.costResource]
        if(resource && resource.count > upgrade.upgradeCost) {
          resource.addStatic(-upgrade.upgradeCost)
          upgrade.purchased += 1
          console.log("upgrade.purchased", upgrade.purchased)
          if (upgrade.purchased >= upgrade.max) {
            upgrade.available = false
            console.log("upgrade.available", upgrade.available)
          }
        }
      }
    }
  }
})