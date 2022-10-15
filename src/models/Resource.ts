import type { IStoryFlag } from '@/types/IStore';
export default class {
  readonly id = 0
  readonly name = ''
  readonly description = ''

  private _count = 0
  private _perSecond = 0
  private applyModifiers = true

  min = 0
  max = 100
  modifier = 1
  purchaseCost = 1

  constructor(id: number = 0, name: IStoryFlag = 'intro', description: string = '', perSecond: number = 0, applyModifiers: boolean = true) {
    id = id
    name = name
    description = description
    this._perSecond = perSecond
    this.applyModifiers = applyModifiers
  }

  get count() {
    return this._count
  }

  set perSecond(count: number) {
    this._perSecond = count
  }

  increment(ticks: number): void {
    const modifier = this.applyModifiers ? this.modifier : 1
    this._updateCount(this._count + this._perSecond * (ticks / 1000) * modifier)
  }

  addStatic(count: number): void {
    this._updateCount(this._count + count)
  }

  _updateCount(value: number): void {
    const temp = Math.min(this.max, value)
    this._count = Math.max(this.min, temp)
  }
}