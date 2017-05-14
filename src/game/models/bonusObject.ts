import { Bonus } from './enums/bonus'
import Identifier from './identifier'


export default class BonusObject {
    bonusType: Bonus
    baseValue: number

    identifier: Identifier
    resource: string
    
    additives: Array<[Identifier, number]> = []
    multiplier: Array<[Identifier, number]> = []

    constructor(
        bonusType: Bonus,
        baseValue: number,
        resource: string,
        identifier: Identifier){

        this.bonusType = bonusType
        this.baseValue = baseValue
        this.identifier = identifier
        this.resource = resource
    }
}