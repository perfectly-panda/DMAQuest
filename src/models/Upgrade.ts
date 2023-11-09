import type { IStoryFlag } from "@/types/IStore"

export interface newUpgrade {
  id: string,
  name: string,
  description: string,
  available?: boolean,
  upgradeCost: number,
  costMultiplier?:number
  resourceMultiplier?: number
  resourceFlatValue?: number,
  purchased?: number,
  max?: number,
  costResource: IStoryFlag,
}

export type ImprovementType = "perSecond" | "staticValue" | "max" | "min"

export class Upgrade {
  id: string
  name: string
  description: string
  available: boolean
  upgradeCost: number
  costMultiplier:number
  resourceMultiplier: number
  resourceFlatValue: number
  purchased: number
  max: number
  costResource: IStoryFlag
  
  constructor({
    id,
    name,
    description,
    available = false,
    upgradeCost,
    costMultiplier = 1,
    resourceMultiplier = 0,
    resourceFlatValue = 0,
    purchased = 0,
    max = 1,
    costResource,
  } : newUpgrade) {
    this.id = id
    this.name = name
    this.description = description
    this.available = available
    this.upgradeCost = upgradeCost
    this.costMultiplier = costMultiplier
    this.resourceMultiplier = resourceMultiplier
    this.resourceFlatValue = resourceFlatValue
    this.purchased = purchased
    this.max = max
    this.costResource = costResource
  }
}