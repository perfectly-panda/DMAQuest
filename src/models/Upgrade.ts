import type { IStoryFlag } from "@/types/IStore"

export interface newUpgrade {
  id: string,
  name: string,
  description: string,
  cost: number,
  multiplier: number,
  purchased: boolean,
  costResource: IStoryFlag,
  improvedResource: IStoryFlag,
}

export class Upgrade {
  id: string
  name: string
  description: string
  cost: number
  multiplier: number
  purchased: boolean
  costResource: IStoryFlag
  improvedResource: IStoryFlag
  
  constructor({
    id,
    name,
    description,
    cost,
    multiplier,
    purchased = false,
    costResource,
    improvedResource,
  } : newUpgrade) {
    this.id = id
    this.name = name
    this.description = description
    this.cost = cost
    this.multiplier = multiplier
    this.purchased = purchased
    this.costResource = costResource
    this.improvedResource = improvedResource
  }
}