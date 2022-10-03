export default class {
  readonly id = 0
  readonly name = ''
  readonly description = ''

  private _count = 0
  private _perSecond = 0

  min = 0
  max = 100
  visible = false

  constructor(id: number, name: string = '', description: string = '', perSecond: number = 0) {
    id = id
    name = name
    description = description
    this._perSecond = perSecond
  }

  get count() {
    return this._count
  }

  set perSecond(count: number) {
    this._perSecond = count
  }

  increment(ticks: number): void {
    if(this._perSecond > 0) {
      const count = this._count + this._perSecond * (ticks / 1000)
      this._count = Math.min(this.max, count)
    }
  }
}