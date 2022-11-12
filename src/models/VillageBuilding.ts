export class VillageBuilding {
  name: string
  location: {x: number, y: number}
  canRemove: boolean

  constructor(name: string, location: {x: number, y: number}, canRemove: boolean = true) {
    this.name = name
    this.location = location
    this.canRemove = canRemove
  }

  load(building: VillageBuilding): void {
    this.canRemove = building.canRemove
    this.name = building.name
  }
}