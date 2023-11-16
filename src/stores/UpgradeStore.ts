import { Upgrade } from "@/models/Upgrade";
import { defineStore } from "pinia";
import { useResourceStore } from "./ResourceStore";

export const useUpgradeStore = defineStore('upgrades', {
  state: () => ({
    smBatteryPack: new Upgrade({id: 'smBatteryPack', name: 'Small Battery Pack', description: 'Increases battery capacity by 1%', available: false, upgradeCost: 10, costMultiplier: 1.1, resultType: 'percentMax', resultValue: 0.01, costResource: 'cash', impactedResource: 'battery'}),
    cardboard: new Upgrade({id:'cardboard', name:'Unlock Cardboard', description:'Unlock cardboard resource purchases', available: true, upgradeCost: 1, costMultiplier: 1.1, costResource: 'cash', resultType: 'unlock', resultValue: 1, impactedResource: 'cardboard'}),
    snacksAutoShip: new Upgrade({id:"snacksAutoShip", name: "Unlock Snacks Autoship", description: "Unlock autoship resource purchases", available: false, upgradeCost: 1, costMultiplier: 1.1, costResource: 'cash', resultType: 'special', resultValue: 1, impactedResource: 'snacks', purchaseFunction: () => {
      useResourceStore().snacks.autoship = true
    }}),
      /*
      bigger battery
      cardboard
      snacks
      */
  }),
  getters: {
    upgrades(state): Array<Upgrade> {
      return Object.values(state).filter((f) => f instanceof Upgrade)
    },
    getUpdadeById: (state) => (id: string): Upgrade | undefined => {
      return Object.values(state).find((f) => f.id === id)
    },
    getAvailableUpgrades: (state) => () : Upgrade[] => {
      return Object.values(state).filter((f) => f.available)
    },
    getPurchasedUpgrades: (state) => (resource: string): Array<Upgrade> => {
      const upgrades = Object.values(state).filter((f) => f instanceof Upgrade 
        && f.purchased > 0)
      
      if(resource !== 'all') {
        return upgrades.filter((f) => f.impactedResource === resource)
      }
      return upgrades
    },
  },
  actions: {
    purchaseUpgrade(id: string) {
      console.log("purchaseUpgrade", id)
      const upgrade = this.getUpdadeById(id)
      if (upgrade && upgrade.available) {
        const resourceStore = useResourceStore()
        const resource = resourceStore[upgrade.costResource]
        if(resource && resource.count > upgrade.upgradeCost) {
          resource.addStatic(-upgrade.upgradeCost)
          upgrade.purchased += 1
          console.log("upgrade.purchased", upgrade.purchased)
          if (upgrade.purchased >= upgrade.max) {
            upgrade.available = false
          }

          if(upgrade.resultType === "unlock"){
            const unlock = resourceStore[upgrade.impactedResource]
            if(unlock) {
              unlock.visible = true
            } 
          }
          if(upgrade.resultType === "special") {
            upgrade.purchaseFunction()
          }
        }
      }
    },
    loadSaveData(data: any) {
      if (data) {
        for (const upgradeKey of Object.keys(data)) {
          // @ts-ignore
          this[upgradeKey].load(data[upgradeKey])
        }
      }
    }
  }
})