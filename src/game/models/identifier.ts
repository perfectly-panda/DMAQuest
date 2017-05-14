export default class Identifier {
    type: string
    element: string
    item: string

    constructor(type: string, element: string, item: string = '') {
        this.type = type
        this.element = element
        this.item = item
    }

    public static Copy(identifier: Identifier): Identifier {
        return new Identifier(identifier.type, identifier.element, identifier.item)
    }
}