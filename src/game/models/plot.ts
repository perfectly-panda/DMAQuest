import { Template } from './template'
import { Type } from './enums/type'
import { Tab } from './enums/tab'
import { Bonus } from './enums/bonus'
import BonusObject from './bonusObject'

export default class Plot implements Template {
    name: string
    story: string
    description: string
    type: Type = Type.plot
    visible: boolean = false
    available: boolean = true
    tab: Tab = Tab.story

    parents: Array<[string, Type, number]>
    unlocks: Array<[string, Type, number]>
    pricing: Array<[string, number, number]>
    bonuses: object

    constructor (name: string, story:string, description: string, parents: Array<[string, Type, number]>, unlocks: Array<[string, Type, number]>, pricing: Array<[string, number, number]>, bonuses: object) {
        this.name = name
        this.story = story
        this.description = description

        this.parents = parents
        this.unlocks = unlocks
        this.pricing = pricing
        this.bonuses = bonuses
    }
}