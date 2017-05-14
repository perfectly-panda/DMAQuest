import { Type } from './enums/type'
import Identifier from "./identifier"
import Flags from './flags'

export default class Tab {
    name: string
    tab: string
    description: string

    flags: Flags = new Flags()
    identifier: Identifier

    parents: Array<[Identifier, number]>

    constructor (
        name: string, 
        tab: string,
        description: string, 
        identifier: Identifier,
        parents: Array<[Identifier, number]> = []
    ) {
        this.name = name
        this.tab = tab
        this.description = description

        this.identifier = identifier

        this.parents = parents
    }
}