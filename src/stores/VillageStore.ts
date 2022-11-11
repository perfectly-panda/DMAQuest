import { VillageBuilding } from "@/models/VillageBuilding";
import { defineStore } from "pinia";

export const useVillageStore = defineStore('villageStore', {
  state: () => ({
    grid: [[new VillageBuilding("Tavern", {x: 0,y: 0}, false)]] as Array<Array<VillageTile>>,
    gridWidth: 1,
    gridHeight: 1,
    selectedBuilding: undefined as VillageTile
  }),
  getters: {
    getBuilding: (state) => (x: number, y: number): VillageTile => {
      if( x < state.gridWidth && y < state.gridHeight) {
        return state.grid[x][y]
      }
    }
  },
  actions: {
    addBuilding (x: number, y: number, building: VillageBuilding) {
      if (!this.getBuilding(x, y) && x < this.gridWidth && y < this.gridHeight) {
        this.grid[x][y] = building
      }
    },
    selectBuilding (x: number, y: number) {
      this.selectedBuilding = this.getBuilding(x, y)
    },
    removeBuilding (x: number, y: number) {
      const building = this.getBuilding(x, y)
      if (building && building.canRemove) {
        this.grid[x][y] = undefined
      }
    }
  }
})

export type VillageTile = VillageBuilding | undefined