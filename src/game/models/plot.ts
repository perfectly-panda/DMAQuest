import { Template } from './template'
import { Type } from './enums/type'
import { Tab } from './enums/tab'
import { Bonus } from './enums/bonus'
import BonusObject from './bonusObject'
import Identifier from './identifier'
import Flags from './flags'

export default class Plot implements Template {
    name: string
    story: string
    description: string

    flags: Flags = new Flags()
    identifier: Identifier
    value = false

    parents: Array<[Identifier, number]> = []
    unlocks: Array<[Identifier, number]> = []
    pricing: Array<[string, number, number]> = []
    negates: Array<Identifier> = []
    bonuses: object = {}
    modifies: object = {}

    constructor (
        name: string, 
        story: string,
        description: string,
        identifier: Identifier,
        optionalParameters?: any
    ) {
        
        this.name = name
        this.story = story
        this.description = description

        this.identifier = identifier

        if(optionalParameters.parents != null) this.parents = optionalParameters.parents
        if(optionalParameters.pricing != null) this.pricing = optionalParameters.pricing
        if(optionalParameters.negates != null) this.negates = optionalParameters.negates
        if(optionalParameters.bonuses != null) this.bonuses = optionalParameters.bonuses
        if(optionalParameters.modifies != null) this.modifies = optionalParameters.modifies
        if(optionalParameters.buyOnce != null) this.flags.buyOnce = optionalParameters.buyOnce
    }
}