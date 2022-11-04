import { Resource } from './Resource';
import { useResourceStore } from '../stores/ResourceStore';
import { useGameStore } from '../stores/GameStore';
import StoryFlag from './StoryFlag';
export default class {
  private _running = false
  private _currentTick = Date.now()
  private _ticker: any
  private _totalTicks = 0

  private _resourceStore = useResourceStore()
  private _gameStore = useGameStore()

  temp = false

  constructor(resourceStore: any = null, gameStore: any = null) {
    this._resourceStore = resourceStore? resourceStore : this._resourceStore
    this._gameStore = gameStore? gameStore : this._gameStore 
  }

  get totalTicks(): number {
    return this._totalTicks 
  }
  get resourceStore(): any {
    return this._resourceStore
  }
  get running(): boolean {
    return this._running
  }

  get gameStore(): any {
    return this._gameStore
  }

  private _runTick(): void {
    if(this._running) {
      const tick = Date.now()
      const ticks = tick - this._currentTick
      this._totalTicks += ticks
      this._currentTick = tick

      this._unlockChecks()
      this._applyModifiers()

      for(const resource of Object.values(this._resourceStore)) {
        if(resource instanceof Resource) {
           resource.increment(ticks)
        }
      }
    }
  }

  private _unlockChecks(): void {
    if(!this._gameStore.checkStoryFlag('portal') &&
      this._gameStore.checkStoryFlag('battery') &&
      this._resourceStore.battery.count >= 99) 
    {
      this.temp = true
      this._gameStore.addStoryFlag(new StoryFlag('portal', 4))
      this._resourceStore.portal.addStatic(1)
    }
  }

  private _applyModifiers(): void {
    if(this._resourceStore.battery.count <= 0) {
      this._resourceStore.portal.modifier = 0
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
    this.start()
  }

  runTick(count = 1): void {
    this._running = true
    for(let i = 0; i < count; i++) {
      this._runTick()
    }
  }
}