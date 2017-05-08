export default class Identifier {
    type: string
    element: string
    item: string

    constructor(type: string, element: string, item: string) {
        this.type = type
        this.element = element
        this.item = item
    }
}