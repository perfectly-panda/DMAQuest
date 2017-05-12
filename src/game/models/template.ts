import { Type } from './enums/type'
import { Tab } from './enums/tab'
import { Bonus } from './enums/bonus'
import BonusObject from './bonusObject'
import Identifier from './identifier'

export interface Template {
    name: string
    description: string
    type: Type
    visible: boolean
    available: boolean
    tab: Tab
    negates: Array<Identifier>
    negated: boolean

    parents: Array<[Identifier, number]>
    unlocks: Array<[Identifier, number]>
    pricing: Array<[string, number]>
    bonuses: object


}