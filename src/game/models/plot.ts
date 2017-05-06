import { Template } from './template'
import { Type } from './enums/type'
import { Tab } from './enums/tab'
import { Bonus } from './enums/bonus'

export default class Plot implements Template {
    name: string
    description: string
    type: Type = Type.plot
    visible: boolean = false
    tab: Tab = Tab.story

    storyText: string

    parents: Array<string>
    unlocks: Array<string>
    pricing: Array<[string, number, number]>
    bonuses: Array<[string, Bonus, number]>

    constructor (name: string, description: string, stroyText: string, parents: Array<string>, unlocks: Array<string>, pricing: Array<[string, number, number]>, bonuses: Array<[string, Bonus, number]> ) {
        this.name = name
        this.description = description

        this.parents = parents
        this.unlocks = unlocks
        this.pricing = pricing
        this.bonuses = bonuses
    }
}