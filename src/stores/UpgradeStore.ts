import type { Upgrade } from "@/models/Upgrade";
import { defineStore } from "pinia";

export const useUpgradeStore = defineStore('upgrades', {
  state: () => ({
    upgrades: [
      
    ] as Upgrade[],
  }),
})