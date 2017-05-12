import { Bonus } from './enums/bonus'
import Identifier from './identifier'


export default class BonusObject {
    name: string
    resource: string
    bonusType: Bonus
    baseValue: number
    
    additives: Array<[Identifier, number]>
    multiplier: Array<[Identifier, number]>
    identifier: Identifier

    constructor(
        name: string,
        resource: string,
        bonusType: Bonus,
        baseValue: number,
        additives: Array<[Identifier, number]>,
        multiplier: Array<[Identifier, number]>,
        identifier: Identifier){

        this.name = name
        this.resource = resource
        this.bonusType = bonusType
        this.baseValue = baseValue
        this.additives = additives
        this.multiplier = multiplier
        this.identifier = identifier
    }
}