export default class Resource {
    name: string
    description: string
    value: number = 0
    visible: boolean = false
    purchasable: boolean = false
    resetValue: number = 0

    constructor (name: string, description: string) {
        this.name = name
        this.description = description
    }
}