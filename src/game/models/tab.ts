import { Type } from './enums/type'

export default class Tab {
    name: string
    description: string
    visible: boolean = false
    parents: Array<[string, Type, number]>

    constructor (name: string, description: string, parents: Array<[string, Type, number]>) {
        this.name = name
        this.description = description
        this.parents = parents
    }
}