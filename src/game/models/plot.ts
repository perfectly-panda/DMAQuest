import { Template } from './template'
import { Type } from './enums/type'
import { Tab } from './enums/tab'
import { Bonus } from './enums/bonus'
import BonusObject from './bonusObject'
import Identifier from './identifier'

export default class Plot implements Template {
    name: string
    story: string
    description: string
    type: Type = Type.plot
    visible: boolean = false
    available: boolean = false
    tab: Tab = Tab.story
    negates: Array<Identifier>
    negated: boolean = false
    purchased: boolean = false

    parents: Array<[Identifier, number]>
    unlocks: Array<[Identifier, number]>
    pricing: Array<[string, number, number]>
    bonuses: object

    constructor (name: string, story:string, description: string, negates: Array<Identifier>,      
        parents: Array<[Identifier, number]>, unlocks: Array<[Identifier, number]>, pricing: Array<[string, number, number]>, bonuses: object) {
        
        this.name = name
        this.story = story
        this.description = description
        this.negates = negates

        this.parents = parents
        this.unlocks = unlocks
        this.pricing = pricing
        this.bonuses = bonuses
    }
}