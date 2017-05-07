import { Template } from './template'
import { Type } from './enums/type'
import { Tab } from './enums/tab'
import { Bonus } from './enums/bonus'

export default class Plot implements Template {
    name: string
    description: string
    type: Type = Type.plot
    visible: boolean = false
    available: boolean = true
    tab: Tab = Tab.story

    parents: Array<[string, Type, number]>
    unlocks: Array<[string, Type, number]>
    pricing: Array<[string, number, number]>
    bonuses: Array<[string, Bonus, number]>

    constructor (name: string, description: string, parents: Array<[string, Type, number]>, unlocks: Array<[string, Type, number]>, pricing: Array<[string, number, number]>, bonuses: Array<[string, Bonus, number]> ) {
        this.name = name
        this.description = description

        this.parents = parents
        this.unlocks = unlocks
        this.pricing = pricing
        this.bonuses = bonuses
    }
}