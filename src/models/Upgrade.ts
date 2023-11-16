import type { IStoryFlag } from "@/types/IStore"

export type UpgradeType = "percentPerSecond" | "flatPerSecond" | "percentMax" | "flatMax" | "flatValue" | "unlock" | "special"
export interface newUpgrade {
  id: string,
  name: string,
  description: string,
  available?: boolean,
  upgradeCost: number,
  costMultiplier?:number
  resultType?: UpgradeType,
  resultValue?: number,
  purchased?: number,
  max?: number,
  costResource: IStoryFlag,
  impactedResource: IStoryFlag,
  purchaseFunction?: Function
}
export class Upgrade {
  id: string
  name: string
  description: string
  available: boolean
  upgradeCost: number
  costMultiplier:number
  resultType: UpgradeType
  resultValue: number
  purchased: number
  max: number
  costResource: IStoryFlag
  impactedResource: IStoryFlag
  purchaseFunction: Function
  
  constructor({
    id,
    name,
    description,
    available = false,
    upgradeCost,
    costMultiplier = 1,
    resultType = "flatPerSecond",
    resultValue = 1,
    purchased = 0,
    max = 1,
    costResource,
    impactedResource,
    purchaseFunction = () => {}
  } : newUpgrade) {
    this.id = id
    this.name = name
    this.description = description
    this.available = available
    this.upgradeCost = upgradeCost
    this.costMultiplier = costMultiplier
    this.resultType = resultType
    this.resultValue = resultValue
    this.purchased = purchased
    this.max = max
    this.costResource = costResource
    this.impactedResource = impactedResource
    this.purchaseFunction = purchaseFunction
  }

  load(data: any): void {
    console.log("load upgrade", data, data.available)
    this.id = data.id
    this.name = data.name
    this.description = data.description
    this.available = data.availabile
    console.log("load upgrade after", data.available)
    this.costMultiplier = data.costMultiplier
    this.resultType = data.resultType
    this.resultValue = data.resultValue
    this.purchased = data.purchased
    this.max = data.max
    this.costResource = data.costResource
  }
}