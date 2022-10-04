import type IResourceStore from '../stores/IResourceStore';
import Flag from './Flag';
export default class {
  private _running = false
  private _currentTick = Date.now()
  private _ticker: any
  private _totalTicks = 0

  private _resourceStore: IResourceStore
  private _gameStore: any

  constructor(resourceStore: any, gameStore: any) {
    this._resourceStore = resourceStore as IResourceStore
    this._gameStore = gameStore
  }

  get totalTicks(): number {
    return this._totalTicks 
  }
  get resourceStore(): any {
    return this._resourceStore
  }

  private _runTick(): void {
    if(this._running) {
      console.log('tick')
      const tick = Date.now()
      const ticks = tick - this._currentTick
      this._totalTicks += ticks
      this._currentTick = tick

      for(const resource of Object.values(this._resourceStore.resources)) {
        if(resource.increment) {
           resource.increment(ticks)
        }
      }
    }
  }

  start(): void {
    this._running = true
    this._currentTick = Date.now()

    if(!this._ticker) {
      this._ticker = setInterval(this._runTick.bind(this), 250)
    }
  }

  stop(): void {
    this._running = false
    clearInterval(this._ticker)
    this._ticker = null
  }

  initialize(): void {
    this._gameStore.addStoryFlag(new Flag("waitTime",0))
    this.start()
  }
}