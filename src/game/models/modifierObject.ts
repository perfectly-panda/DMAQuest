import { Modifiers } from './enums/modifiers'
import { Type } from './enums/type'
import Identifier from './identifier'


export default class ModifierObject {
    modifies: Identifier
    identifier: Identifier
    modifierType: Modifiers
    value: number

    constructor(modifies: Identifier,
    identifier: Identifier,
    modifierType: Modifiers,
    value: number){
        this.modifies = modifies
        this.identifier = identifier
        this.modifierType = modifierType
        this.value = value
    }
}