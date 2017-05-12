import { Type } from './enums/type'
import Identifier from "./identifier"

export default class Tab {
    name: string
    description: string
    visible: boolean = false
    negated: boolean = false
    parents: Array<[Identifier, number]>

    constructor (name: string, description: string, parents: Array<[Identifier, number]>) {
        this.name = name
        this.description = description
        this.parents = parents
    }
}