import { Upgrade } from "@/models/Upgrade";
import { defineStore } from "pinia";
import { useResourceStore } from "./ResourceStore";

export const useUpgradeStore = defineStore('upgrades', {
  state: () => ({
    upgrades: [
      new Upgrade({id: 'smBatteryPack', name: 'Small Battery Pack', description: 'Increases battery capacity by 1%', available: true, cost: 10, multiplier: 1.1, costResource: 'cash', apply: UpgradeApply.smBatteryPack}),
      new Upgrade({id:'cardboard', name:'Cardboard', description:'Increases cardboard by 1 box.', available: true, cost: 1, multiplier: 1.1, costResource: 'cash', }),
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
    }
  },
  actions: {
    purchaseUpgrade(id: string) {
      const upgrade = this.getUpdadeById(id)
      if (upgrade) {
        upgrade.purchased = 1
      }
    }
  }
})

const UpgradeApply = {
  smBatteryPack: () => {
    const resourceStore = useResourceStore()
    if (resourceStore.battery.perSecond < 0) {
      resourceStore.battery.perSecond = resourceStore.battery.perSecond * .99
    } else {
      resourceStore.battery.perSecond = resourceStore.battery.perSecond * 1.01
    }
  }
}