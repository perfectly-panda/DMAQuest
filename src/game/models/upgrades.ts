import { Template } from './template'
import { Type } from './enums/type'
import { Tab } from './enums/tab'
import { Bonus } from './enums/bonus'
import { Modifiers } from './enums/modifiers'
import BonusObject from './bonusObject'
import ModifierObject from './modifierObject'
import Identifier from './identifier'

export default class Upgrade implements Template {
    name: string
    description: string
    type: Type = Type.upgrade
    visible: boolean = false
    available: boolean = false
    value: boolean = false
    tab: Tab = Tab.upgrades
    negates: Array<Identifier>
    negated: false

    parents: Array<[Identifier, number]>
    unlocks: Array<[Identifier, number]>
    pricing: Array<[string, number, number]>
    bonuses: object
    modifies: object

    constructor (
        name: string, 
        description: string,
        negates: Array<Identifier>,

        parents: Array<[Identifier, number]>, 
        unlocks: Array<[Identifier, number]>, 
        pricing: Array<[string, number, number]>,
        bonuses: object,
        modifies: object
    ) {
        this.name = name
        this.description = description
        this.negates = negates

        this.parents = parents
        this.unlocks = unlocks
        this.pricing = pricing
        this.bonuses = bonuses
        this.modifies = modifies
    }
}