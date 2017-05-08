import BonusObject from './bonusObject'
import Identifier from "./identifier"
import { Conditional } from './enums/conditional'

export default class Resource {
    name: string
    description: string
    value: number = 0
    visible: boolean = false
    purchasable: boolean = false
    resetValue: number = 0
    maxValue: number
    perTick: BonusObject
    perTickCache: number = 0
    condition: [Identifier, number, Conditional]

    constructor (name: string, description: string, perTick: BonusObject, maxValue: number = -1, condition: [Identifier, number, Conditional] = null) {
        this.name = name
        this.description = description
        this.maxValue = maxValue
        this.perTick = perTick
        this.condition = condition
    }
}