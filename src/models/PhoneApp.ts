export interface newApp { id:string, 
  name: string, 
  description: string, 
  space: number, 
  installed?: boolean, 
  available?: boolean,
  canRemove?: boolean,}


export class PhoneApp {
  id: string
  name: string
  description: string
  space: number
  installed: boolean
  available: boolean
  canRemove: boolean

  constructor({
    id,
    name,
    description,
    space,
    installed = false, 
    available = false,
    canRemove = true,
  } : newApp) {
    this.id = id
    this.name = name
    this.description = description
    this.space = space
    this.installed = installed
    this.available = available
    this.canRemove = canRemove
  }

  get appSize(): string {
    return (this.space * 1024).toFixed(0) + ' MB'
  }
}