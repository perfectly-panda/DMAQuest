import { Bonus } from './enums/bonus'
import Identifier from './identifier'


export default class BonusObject {
    name: string
    resource: string
    bonusType: Bonus
    baseValue: number
    additives: Array<[Identifier, number]>
    multiplier: Array<[Identifier, number]>

    constructor(
        name: string,
        resource: string,
        bonusType: Bonus,
        baseValue: number,
        additives: Array<[Identifier, number]>,
        multiplier: Array<[Identifier, number]>){

        this.name = name
        this.resource = resource
        this.bonusType = bonusType
        this.baseValue = baseValue
        this.additives = additives
        this.multiplier = multiplier
    }
}