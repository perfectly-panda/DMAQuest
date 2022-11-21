import { useResourceStore } from "@/stores/ResourceStore"
import type { IStoryFlag } from "@/types/IStore"

export interface newUpgrade {
  id: string,
  name: string,
  description: string,
  available?: boolean,
  cost: number,
  multiplier?: number,
  purchased?: number,
  max?: number,
  costResource: IStoryFlag,
  apply?: Function,
}

export type ImprovementType = "perSecond" | "staticValue" | "max" | "min"

export class Upgrade {
  id: string
  name: string
  description: string
  available: boolean
  cost: number
  multiplier: number
  purchased: number
  max: number
  costResource: IStoryFlag
  apply: Function
  
  constructor({
    id,
    name,
    description,
    available = false,
    cost,
    multiplier = 1.1,
    purchased = 0,
    max = 10,
    costResource,
    apply = () => {},
  } : newUpgrade) {
    this.id = id
    this.name = name
    this.description = description
    this.available = available
    this.cost = cost
    this.multiplier = multiplier
    this.purchased = purchased
    this.max = max
    this.costResource = costResource
    this.apply = apply
  }
}