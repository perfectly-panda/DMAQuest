import { Type } from './enums/type'
import { Tab } from './enums/tab'
import { Bonus } from './enums/bonus'
import BonusObject from './bonusObject'
import Identifier from './identifier'
import Flags from './flags'

export interface Template {
    name: string
    description: string
    
    flags: Flags

    identifier: Identifier

    parents: Array<[Identifier, number]>
    pricing: Array<[string, number]>
    negates: Array<Identifier>
    bonuses: object


}