import { Modifiers } from './enums/modifiers'
import { Type } from './enums/type'
import Identifier from './identifier'


export default class ModifierObject {
    modifies: Identifier
    loopBack: Identifier
    modifierType: Modifiers
    value: number

    constructor(modifies: Identifier,
    loopBack: Identifier,
    modifierType: Modifiers,
    value: number){
        this.modifies = modifies
        this.loopBack = loopBack
        this.modifierType = modifierType
        this.value = value
    }
}