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
    },
    loadSaveData (data: any) {
      if(data) {
        if(data.gridHeight) {
          this.gridHeight = data.gridHeight
        }
        if(data.gridWidth) {
          this.gridWidth = data.gridWidth
        }
        if(data.grid) {
          for(const row of data.grid) {
            for(const building of row) {
              const buildingData = this.getBuilding(building.x, building.y)
              if(buildingData) {
                buildingData.load(building)
              }
            }
          }
        }
        if(data.selectedBuilding) {
          this.selectedBuilding = data.selectedBuilding
        }
      }
    }
  }
})

export type VillageTile = VillageBuilding | undefined