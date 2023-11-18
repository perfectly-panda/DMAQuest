import type { Upgrade } from "./Upgrade"
import type {IStoryFlag} from '../types/IStore'
import { useUpgradeStore } from '../stores/UpgradeStore';

export interface newResource {
  id: string, 
  name?: string, 
  description?: string, 
  perSecond?: number,
  startingValue?: number,
  flipMultipiers?: boolean,
  max?: number,
  min?: number,
  visible?: boolean,
  tab?: string,
  purchaseCost?: number,
  purchaseResource?: IStoryFlag,
}

  export class Resource {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly tab: string
  readonly purchaseResource: IStoryFlag

  private _count = 0
  private _perSecond = 0
  private _flipMultipiers = false
  private _upgradeStore = useUpgradeStore()
  private _max = 100

  min = 0
  modifier = 1
  visible = false
  salesPerSecond = 0
  autoship = false
  purchaseCost: number

  constructor({id, 
    name = 'intro', 
    description = '', 
    perSecond = 0,
    startingValue = 0,
    max = 100,
    min = 0,
    visible = false,
    flipMultipiers = false,
    tab = "Story",
    purchaseCost = 1,
    purchaseResource = 'cash',
  } : newResource) {
    this.id = id
    this.name = name
    this.description = description
    this._perSecond = perSecond
    this._count = startingValue
    this._flipMultipiers = flipMultipiers
    this._max = max
    this.min = min
    this.visible = visible
    this.tab = tab
    this.purchaseCost = purchaseCost
    this.purchaseResource = purchaseResource
  }

  get count() {
    return this._count
  }

  get displayCount(): string {
    return this.count.toFixed(2)
  }

  set perSecond(count: number) {
    this._perSecond = count
    if(isNaN(this._perSecond)) {
      this._perSecond = 0
    }
  }

  get perSecond(): number {
    let baseValue = this._perSecond
    let multiplier = 1
    for(let upgrade of this.upgrades) {
      if(upgrade.resultType === 'flatPerSecond') {
        baseValue += upgrade.resultValue
      }
      if(upgrade.resultType === 'percentPerSecond') {
        multiplier += upgrade.resultValue
      }
    }

    if(this._flipMultipiers) {
      multiplier = 1 / multiplier
    }

    return baseValue * multiplier
  }

  get displayPerSecond(): string {
    let perSecond = this.perSecond
    if(this.salesPerSecond > 0) {
      perSecond -= this.salesPerSecond
    }
    return perSecond.toFixed(2)
  }

  get max(): number {
    let baseValue = this._max
    let multiplier = 1
    for(let upgrade of this.upgrades) {
      if(upgrade.resultType === 'flatMax') {
        baseValue += upgrade.resultValue
      }
      if(upgrade.resultType === 'percentMax') {
        multiplier += upgrade.resultValue
      }
    }
    return baseValue * multiplier
  }

  get upgrades(): Array<Upgrade> {
    return this._upgradeStore.getPurchasedUpgrades(this.id)
  }

  increment(ticks: number): void {
    this._updateCount(this._count + this.perSecond * (ticks / 1000))
  }

  addStatic(count: number): void {
    this._updateCount(this._count + count)
  }

  _updateCount(value: number): void {
    const temp = Math.min(this.max, value)
    this._count = Math.max(this.min, temp)
    if(isNaN(this._count)) {
      this._count = 0
    }
  }

  load(data: any): void {
    this._count = data._count
    this._perSecond = data._perSecond
    this.modifier = data.modifier
    this.min = data.min
    this._max = data._max
    this._flipMultipiers = data.flipMultipiers
    this.purchaseCost = data.purchaseCost
    this.visible = data.visible
  }
}