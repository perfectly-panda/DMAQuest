export interface newResource {id?: number, 
  name?: string, 
  description?: string, 
  perSecond?: number,
  startingValue?: number,
  applyModifiers?: boolean,
  max?: number,}

export class Resource {
  readonly id: number
  readonly name: string
  readonly description: string

  private _count = 0
  private _perSecond = 0
  private applyModifiers = true

  min = 0
  max: number
  modifier = 1
  purchaseCost = 1

  constructor({id = 0, 
    name = 'intro', 
    description = '', 
    perSecond = 0,
    startingValue = 0,
    applyModifiers = true,
    max = 100
  } : newResource) {
    this.id = id
    this.name = name
    this.description = description
    this._perSecond = perSecond
    this._count = startingValue
    this.applyModifiers = applyModifiers
    this.max = max
  }

  get count() {
    return this._count
  }

  get displayCount(): string {
    return this.count.toFixed(2)
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