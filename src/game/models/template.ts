import { Type } from './enums/type'
import { Tab } from './enums/tab'
import { Bonus } from './enums/bonus'

export interface Template {
    name: string
    description: string
    type: Type
    visible: boolean
    available: boolean
    tab: Tab

    parents: Array<[string, Type, number]>
    unlocks: Array<[string, Type, number]>
    pricing: Array<[string, number]>
    bonuses: Array<[string, Bonus, number]>


}