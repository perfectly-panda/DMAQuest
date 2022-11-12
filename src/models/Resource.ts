export interface newResource {id?: number, 
  name?: string, 
  description?: string, 
  perSecond?: number,
  startingValue?: number,
  applyModifiers?: boolean,
  max?: number,
  min?: number,
  visible?: boolean,}

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
  visible = false

  constructor({id = 0, 
    name = 'intro', 
    description = '', 
    perSecond = 0,
    startingValue = 0,
    applyModifiers = true,
    max = 100,
    min = 0,
    visible = false,
  } : newResource) {
    this.id = id
    this.name = name
    this.description = description
    this._perSecond = perSecond
    this._count = startingValue
    this.applyModifiers = applyModifiers
    this.max = max
    this.min = min
    this.visible = visible
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

  get perSecond(): string {
    if(this.applyModifiers) {
      return (this._perSecond * this.modifier).toFixed(2)
    }
    else {
      return this._perSecond.toFixed(2)
    }
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

  load(data: any): void {
    this._count = data._count
    this._perSecond = data._perSecond
    this.modifier = data.modifier
    this.min = data.min
    this.max = data.max
    this.applyModifiers = data.applyModifiers
    this.purchaseCost = data.purchaseCost
    this.visible = data.visible
  }
}