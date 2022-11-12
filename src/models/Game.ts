import { Resource } from './Resource';
import { useResourceStore } from '../stores/ResourceStore';
import { useGameStore } from '../stores/GameStore';
import { useAppStore } from '@/stores/AppStore';
import { useVillageStore } from '@/stores/VillageStore';

import { useStorage } from '@vueuse/core'

import StoryFlag from './StoryFlag';
import type { IResourceStore } from '@/types/IStore';
export default class {
  private _running = false
  private _currentTick = Date.now()
  private _ticker: any
  private _totalTicks = 0
  private _saveInterval = 1000 * 60 //* 5
  private _ticksToSave = this._saveInterval

  private _resourceStore = useResourceStore()
  private _gameStore = useGameStore()
  private _appStore = useAppStore()
  private _villageStore = useVillageStore()

  temp = false

  constructor(resourceStore: any = null, gameStore: any = null) {
    this._resourceStore = resourceStore? resourceStore : this._resourceStore
    this._gameStore = gameStore? gameStore : this._gameStore 
  }

  get totalTicks(): number {
    return this._totalTicks 
  }
  get running(): boolean {
    return this._running
  }

  private _runTick(): void {
    if(this._running) {
      const tick = Date.now()
      const ticks = tick - this._currentTick
      this._totalTicks += ticks
      this._currentTick = tick

      this._ticksToSave -= ticks

      if(this._ticksToSave <= 0) {
        this._save()
        this._ticksToSave = this._saveInterval
      }

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
      this._gameStore.addStoryFlag(new StoryFlag('portal', 4))
      this._resourceStore.portal.addStatic(1)
    }
  }

  private _applyModifiers(): void {
    if(this._resourceStore.battery.count <= 0) {
      this._resourceStore.portal.modifier = 0
    }

    const chipmunks = this._resourceStore.chipmunk.count
    const wizards = this._resourceStore.wizard.count
    this._resourceStore.wizard.modifier = this._resourceStore.portal.count / 10
    this._resourceStore.wizard.addStatic(chipmunks * -.1)
    this._resourceStore.chipmunk.modifier = this._resourceStore.portal.count / 10
    this._resourceStore.chipmunk.addStatic(wizards * -.1)
  }

  private _save(): void {
    console.log("saving game...")
    const save = {
      resources: this._resourceStore.$state,
      game: this._gameStore.$state,
      village: this._villageStore.$state,
      app: this._appStore.$state,
    }

    localStorage.setItem('save', JSON.stringify(save))
  }

  private _load(): void {
    console.log("loading game...")
    const save = localStorage.getItem('save')
    if(save){
    const saveData = JSON.parse(save)
      this._resourceStore.loadSaveData(saveData.resources)
      this._gameStore.$patch(saveData.game)
      this._villageStore.$patch(saveData.village)
      this._appStore.loadSaveData(saveData.app)
    }
    console.log("game loaded")
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
    this._load()
    this.start()
  }

  runTick(count = 1): void {
    this._running = true
    for(let i = 0; i < count; i++) {
      this._runTick()
    }
  }
}